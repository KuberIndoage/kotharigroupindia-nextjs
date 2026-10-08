import { NextResponse } from 'next/server';
import { normalizePhone, verifyOtp } from '@/lib/otp-store';

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
  const code = String(data.otp ?? '').trim();

  if (!phone) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid mobile number.' },
      { status: 400 }
    );
  }
  if (!/^\d{6}$/.test(code)) {
    return NextResponse.json(
      { ok: false, error: 'Enter the 6-digit OTP.' },
      { status: 400 }
    );
  }

  const result = verifyOtp(phone, code);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 401 });
  }
  return NextResponse.json({ ok: true, verifiedFor: phone, expiresIn: 600 });
}
