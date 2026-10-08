const AISENSY_ENDPOINT = 'https://backend.aisensy.com/campaign/t1/api/v2';

export function aisensyConfigured(): boolean {
  return Boolean(process.env.AISENSY_API_KEY && process.env.AISENSY_OTP_CAMPAIGN_NAME);
}

export type SendOtpResult = {
  ok: boolean;
  notConfigured?: boolean;
  error?: string;
  detail?: string;
};

export async function sendWhatsAppOtp(
  phoneE164: string,
  otp: string,
  userName: string
): Promise<SendOtpResult> {
  const apiKey = process.env.AISENSY_API_KEY;
  const campaignName = process.env.AISENSY_OTP_CAMPAIGN_NAME;

  if (!apiKey || !campaignName) {
    return {
      ok: false,
      notConfigured: true,
      error: 'WhatsApp OTP is not configured (AISENSY_API_KEY / AISENSY_OTP_CAMPAIGN_NAME missing).',
    };
  }

  // Authentication templates with a "Copy Code" button take the code twice
  // (message body + button). Set AISENSY_OTP_PARAM_COUNT=2 in that case.
  const paramCount = Math.min(Math.max(Number(process.env.AISENSY_OTP_PARAM_COUNT || '1') || 1, 1), 5);
  const templateParams = Array.from({ length: paramCount }, () => otp);

  try {
    const res = await fetch(AISENSY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apiKey,
        campaignName,
        destination: phoneE164,
        userName: userName || 'Website User',
        source: 'Website',
        templateParams,
      }),
      signal: AbortSignal.timeout(15000),
    });

    const text = (await res.text().catch(() => '')).slice(0, 400);
    if (!res.ok) {
      return {
        ok: false,
        error: `AiSensy rejected the request (HTTP ${res.status}). Check the API key, campaign name and that the API campaign is Live.`,
        detail: text,
      };
    }
    return { ok: true, detail: text };
  } catch (err) {
    return {
      ok: false,
      error: 'Could not reach AiSensy right now. Please try again in a moment.',
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}
