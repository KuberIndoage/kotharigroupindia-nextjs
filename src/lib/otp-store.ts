import { randomInt } from 'crypto';

export const OTP_TTL_MS = 5 * 60 * 1000; // code valid for 5 minutes
export const OTP_RESEND_COOLDOWN_MS = 30 * 1000; // 30s between sends
export const OTP_MAX_ATTEMPTS = 5; // wrong tries per code
export const VERIFIED_TTL_MS = 10 * 60 * 1000; // verified window for form submit

type PendingOtp = {
  code: string;
  expiresAt: number;
  attempts: number;
  lastSentAt: number;
};

// In-memory (per Node process) — fine for a single `next start` instance.
const pending = new Map<string, PendingOtp>();
const verified = new Map<string, number>(); // phone -> verified-until

function purge() {
  const now = Date.now();
  for (const [key, value] of pending) if (value.expiresAt <= now) pending.delete(key);
  for (const [key, until] of verified) if (until <= now) verified.delete(key);
}

/** Accepts "98765 43210", "09876543210", "+919876543210", "919876543210". */
export function normalizePhone(raw: string): string | null {
  const trimmed = String(raw || '').trim();
  if (!trimmed) return null;
  const digits = trimmed.replace(/\D/g, '');
  if (!digits) return null;

  let local = digits;
  if (local.startsWith('00')) local = local.slice(2);

  if (local.length >= 12 && local.startsWith('91') && local.length <= 13) {
    local = local.slice(2);
  } else if (local.length === 13 && local.startsWith('91')) {
    local = local.slice(2);
  }

  if (local.length === 11 && local.startsWith('0')) local = local.slice(1);
  if (local.length === 10 && /^[6-9]/.test(local)) return `+91${local}`;

  // Fallback: any other country code / length, as long as it looks like E.164.
  if (local.length >= 10 && local.length <= 14) return `+${local}`;
  return null;
}

export function generateOtp(): string {
  return String(randomInt(100000, 1000000));
}

export function resendAvailableIn(phone: string): number {
  purge();
  const entry = pending.get(phone);
  if (!entry) return 0;
  return Math.max(0, entry.lastSentAt + OTP_RESEND_COOLDOWN_MS - Date.now());
}

export function saveOtp(phone: string, code: string) {
  purge();
  pending.set(phone, {
    code,
    expiresAt: Date.now() + OTP_TTL_MS,
    attempts: OTP_MAX_ATTEMPTS,
    lastSentAt: Date.now(),
  });
  verified.delete(phone);
}

export function verifyOtp(phone: string, code: string): { ok: boolean; error?: string } {
  purge();
  const entry = pending.get(phone);
  if (!entry) {
    return { ok: false, error: 'OTP expired or not requested. Please send a new OTP.' };
  }
  if (entry.expiresAt <= Date.now()) {
    pending.delete(phone);
    return { ok: false, error: 'OTP expired. Please send a new OTP.' };
  }
  if (entry.attempts <= 0) {
    pending.delete(phone);
    return { ok: false, error: 'Too many wrong attempts. Please send a new OTP.' };
  }
  if (entry.code !== String(code || '').trim()) {
    entry.attempts -= 1;
    return {
      ok: false,
      error:
        entry.attempts > 0
          ? `Incorrect OTP. ${entry.attempts} attempt${entry.attempts === 1 ? '' : 's'} left.`
          : 'Too many wrong attempts. Please send a new OTP.',
    };
  }

  pending.delete(phone);
  verified.set(phone, Date.now() + VERIFIED_TTL_MS);
  return { ok: true };
}

export function isVerified(phone: string): boolean {
  purge();
  return verified.has(phone);
}
