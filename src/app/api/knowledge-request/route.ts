import { NextResponse } from 'next/server';
import {
  createTransporter,
  sendMailWithFallback,
  escapeHtml,
  verifyRecaptchaToken,
  NOT_CONFIGURED,
} from '@/lib/mailer';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PINCODE_RE = /^\d{6}$/;
const MAX_LEN = {
  fullName: 100,
  email: 160,
  phone: 30,
  pincode: 10,
  language: 40,
  guide: 200,
  documentUrl: 500,
} as const;

// Route to the divisional inbox based on the division interest.
// Pipe Division → pipe inbox, anything else → irrigation inbox.
function resolveRecipient(division: string): string {
  if (/pipe/i.test(division)) {
    return (
      process.env.CONTACT_PIPE_EMAIL || 'sales.pipe@kotharigroupindia.com'
    );
  }
  return (
    process.env.CONTACT_IRRIGATION_EMAIL ||
    'sales.irrigation@kotharigroupindia.com'
  );
}

// Turn a title like "Banana Guides" into a safe filename slug.
function sanitizeFileName(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const data = body as Record<string, unknown>;
  const fullName = String(data.fullName ?? '').trim();
  const email = String(data.email ?? '').trim();
  const phone = String(data.phone ?? '').trim();
  const pincode = String(data.pincode ?? '').trim();
  const language = String(data.language ?? '').trim();
  const guide = String(data.guide ?? '').trim();
  const division = String(data.division ?? '').trim();
  const documentUrl = String(data.documentUrl ?? '').trim();

  if (!fullName || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: 'Name, email and phone are required.' },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid email address.' },
      { status: 400 }
    );
  }
  if (!documentUrl) {
    return NextResponse.json(
      { ok: false, error: 'Guide document is missing.' },
      { status: 400 }
    );
  }
  if (pincode && !PINCODE_RE.test(pincode)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid 6-digit pincode.' },
      { status: 400 }
    );
  }
  if (
    fullName.length > MAX_LEN.fullName ||
    email.length > MAX_LEN.email ||
    phone.length > MAX_LEN.phone ||
    pincode.length > MAX_LEN.pincode ||
    language.length > MAX_LEN.language ||
    guide.length > MAX_LEN.guide ||
    documentUrl.length > MAX_LEN.documentUrl
  ) {
    return NextResponse.json(
      { ok: false, error: 'One or more fields are too long.' },
      { status: 400 }
    );
  }

  // reCAPTCHA v3 spam check — enforced only when a secret is configured.
  const recaptchaError = await verifyRecaptchaToken(data.recaptchaToken);
  if (recaptchaError) {
    return NextResponse.json(
      { ok: false, error: recaptchaError },
      { status: 403 }
    );
  }

  const transporter = createTransporter();
  if (!transporter) {
    console.error(
      '[knowledge-request] Email is not configured (GMAIL_USER + GMAIL_APP_PASSWORD missing).'
    );
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const to = resolveRecipient(division);
  if (!to) {
    console.error('[knowledge-request] No recipient configured.');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  let pdfBuffer: Buffer;
  try {
    const pdfRes = await fetch(documentUrl, { cache: 'no-store' });
    if (!pdfRes.ok) throw new Error(`PDF fetch failed: ${pdfRes.status}`);
    pdfBuffer = Buffer.from(await pdfRes.arrayBuffer());
  } catch (error) {
    console.error('[knowledge-request] Failed to download guide:', documentUrl, error);
    return NextResponse.json(
      { ok: false, error: 'Could not download the guide. Please try again later.' },
      { status: 502 }
    );
  }

  const fileName = `${sanitizeFileName(guide) || 'Guide'}-${sanitizeFileName(language) || 'English'}.pdf`;
  const from = process.env.GMAIL_USER as string;

  // 1) Email the guide PDF directly to the requester.
  try {
    await sendMailWithFallback({
      from: `"Kothari Group" <${from}>`,
      to: email,
      subject: `Your Kothari Group guide — ${guide}`,
      text: `Dear ${fullName},\n\nThank you for your interest in "${guide}". Please find the requested guide attached as a PDF.\n\nIn case you need any assistance, feel free to reach out to us.\n\nWarm regards,\nKothari Group India`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px;">
          <h2 style="margin: 0 0 12px;">Your Kothari Group guide</h2>
          <p>Dear ${escapeHtml(fullName)},</p>
          <p>Thank you for your interest in <strong>${escapeHtml(guide)}</strong>. Please find the requested guide attached as a PDF.</p>
          <p>If you have any questions about the content, our specialists would be happy to help.</p>
          <p style="margin-top: 24px;">Warm regards,<br />Kothari Group India</p>
        </div>
      `,
      attachments: [
        { filename: fileName, content: pdfBuffer, contentType: 'application/pdf' },
      ],
    });
  } catch (error) {
    console.error('[knowledge-request] sendMail to requester failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Could not send your request. Please try again later.' },
      { status: 502 }
    );
  }

  // 2) Notify the divisional inbox with the requester's details.
  const subject = `KNOWLEDGE GUIDE REQUEST - ${guide.toUpperCase()} - ${fullName.toUpperCase()}`;
  const text = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Pincode: ${pincode || '-'}`,
    `Language: ${language || '-'}`,
    `Guide: ${guide}`,
    `Division: ${division || '-'}`,
    `Guide emailed to: ${email}`,
  ].join('\n');
  const notificationHtml = `
    <h2>New knowledge guide request</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(fullName)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Pincode</strong></td><td>${escapeHtml(pincode || '-')}</td></tr>
      <tr><td><strong>Language</strong></td><td>${escapeHtml(language || '-')}</td></tr>
      <tr><td><strong>Guide</strong></td><td>${escapeHtml(guide || '-')}</td></tr>
      <tr><td><strong>Division</strong></td><td>${escapeHtml(division || '-')}</td></tr>
      <tr><td><strong>Status</strong></td><td>Guide emailed to ${escapeHtml(email)}</td></tr>
    </table>
  `;

  try {
    await sendMailWithFallback({
      from: `"Kothari Group" <${from}>`,
      to,
      replyTo: `"${fullName.replace(/"/g, '')}" <${email}>`,
      subject,
      text,
      html: notificationHtml,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[knowledge-request] sendMail notification failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Could not send your request. Please try again later.' },
      { status: 502 }
    );
  }
}