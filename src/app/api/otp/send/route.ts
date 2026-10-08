import { NextResponse } from 'next/server';
import { aisensyConfigured, sendWhatsAppOtp } from '@/lib/aisensy';
import {
  generateOtp,
  normalizePhone,
  resendAvailableIn,
  saveOtp,
} from '@/lib/otp-store';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const phone = normalizePhone(String(data.phone ?? ''));
  const userName = String(data.userName ?? '').trim().slice(0, 60);

  if (!phone) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid mobile number.' },
      { status: 400 }
    );
  }

  const waitMs = resendAvailableIn(phone);
  if (waitMs > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: `Please wait ${Math.ceil(waitMs / 1000)}s before requesting another OTP.`,
        retryAfter: Math.ceil(waitMs / 1000),
      },
      { status: 429 }
    );
  }

  const otp = generateOtp();
  const configured = aisensyConfigured();

  if (configured) {
    const result = await sendWhatsAppOtp(phone, otp, userName || 'Website User');
    if (!result.ok) {
      console.error('[otp/send] AiSensy send failed:', result.error, result.detail || '');
      return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
    }
    saveOtp(phone, otp);
    return NextResponse.json({ ok: true, expiresIn: 300, resendIn: 30 });
  }

  // Not configured — still allow the flow during local development so the UI can be tested.
  if (process.env.NODE_ENV !== 'production') {
    saveOtp(phone, otp);
    return NextResponse.json({
      ok: true,
      expiresIn: 300,
      resendIn: 30,
      devOtp: otp,
      warning: 'AiSensy is not configured — dev OTP returned. Add AISENSY_API_KEY and AISENSY_OTP_CAMPAIGN_NAME.',
    });
  }

  console.error('[otp/send] AiSensy not configured in production (AISENSY_API_KEY / AISENSY_OTP_CAMPAIGN_NAME).');
  return NextResponse.json(
    { ok: false, error: 'WhatsApp OTP is not configured yet. Please try again later.' },
    { status: 503 }
  );
}
