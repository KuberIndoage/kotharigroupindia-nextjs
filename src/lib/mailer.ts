import nodemailer from 'nodemailer';

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Gmail SMTP using an App Password (GMAIL_APP_PASSWORD) — the only supported
// transport. Returns null when email is not configured.
export function createTransporter() {
  const user = process.env.GMAIL_USER || '';
  const pass = process.env.GMAIL_APP_PASSWORD || '';
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

// Send a mail through the Gmail App-Password transport. Throws on failure.
export async function sendMailWithFallback(
  mailOptions: Parameters<import('nodemailer').Transporter['sendMail']>[0]
): Promise<void> {
  const transporter = createTransporter();
  if (!transporter) throw new Error('Email is not configured.');
  await transporter.sendMail(mailOptions);
}

export const NOT_CONFIGURED = {
  ok: false,
  error: 'Email service is not configured. Please try again later.',
};

// Verify a reCAPTCHA v3 token (score >= 0.5). Skipped entirely when no
// RECAPTCHA_SECRET_KEY is configured. Returns an error message or null.
export async function verifyRecaptchaToken(
  token: unknown
): Promise<string | null> {
  const secret = process.env.RECAPTCHA_SECRET_KEY || '';
  if (!secret) return null;
  if (!token || typeof token !== 'string') {
    return 'Spam check failed. Please reload and try again.';
  }
  try {
    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret, response: token }),
      }
    );
    const verdict = (await verifyRes.json()) as {
      success?: boolean;
      score?: number;
    };
    if (!verdict.success || (verdict.score ?? 0) < 0.5) {
      return 'Spam check failed. Please try again.';
    }
    return null;
  } catch {
    return 'Spam check failed. Please try again.';
  }
}
