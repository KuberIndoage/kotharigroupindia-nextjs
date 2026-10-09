import { useCallback, useEffect, useState } from 'react';

export type OtpStatus = 'idle' | 'sending' | 'sent' | 'verifying' | 'verified';
export type OtpTone = 'info' | 'error' | 'success';

export function useOtpVerification() {
  const [otpStatus, setOtpStatus] = useState<OtpStatus>('idle');
  const [otp, setOtp] = useState('');
  const [otpMsg, setOtpMsg] = useState('');
  const [otpTone, setOtpTone] = useState<OtpTone>('info');
  const [resendIn, setResendIn] = useState(0);

  useEffect(() => {
    if (resendIn <= 0) return;
    const t = setTimeout(() => setResendIn((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendIn]);

  const resetOtp = useCallback(() => {
    setOtpStatus('idle');
    setOtp('');
    setOtpMsg('');
    setResendIn(0);
  }, []);

  const sendOtp = useCallback(
    async (phone: string, userName?: string): Promise<boolean> => {
      if (phone.replace(/\D/g, '').length < 10) {
        setOtpTone('error');
        setOtpMsg('Enter a valid 10-digit mobile number first.');
        return false;
      }
      setOtpStatus('sending');
      setOtpMsg('');
      try {
        const res = await fetch('/api/otp/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone, userName: userName || 'Website User' }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data?.ok) throw new Error(data?.error || 'Could not send the OTP.');
        setOtpStatus('sent');
        setOtp('');
        setResendIn(data.resendIn || 30);
        setOtpTone('info');
        setOtpMsg(
          data.devOtp
            ? `Dev mode - AiSensy not configured. Your OTP is ${data.devOtp}`
            : `OTP sent to ${phone} on WhatsApp. Enter it below.`
        );
        return true;
      } catch (err) {
        setOtpStatus('idle');
        setOtpTone('error');
        setOtpMsg(err instanceof Error ? err.message : 'Could not send the OTP.');
        return false;
      }
    },
    []
  );

  const setOtpField = useCallback(
    (value: string) => setOtp(value.replace(/\D/g, '').slice(0, 6)),
    []
  );

  const verifyOtp = useCallback(
    async (phone: string): Promise<boolean> => {
      if (otpStatus === 'verifying') return false;
      if (!/^\d{6}$/.test(otp)) {
        setOtpTone('error');
        setOtpMsg('Enter the 6-digit OTP.');
        return false;
      }
      setOtpStatus('verifying');
      setOtpMsg('');
      try {
        const res = await fetch('/api/otp/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone, otp }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data?.ok) throw new Error(data?.error || 'Incorrect OTP.');
        setOtpStatus('verified');
        setOtpMsg('WhatsApp number verified.');
        setOtpTone('success');
        return true;
      } catch (err) {
        setOtpStatus('sent');
        setOtpTone('error');
        setOtpMsg(err instanceof Error ? err.message : 'Incorrect OTP.');
        return false;
      }
    },
    [otp, otpStatus]
  );

  return { otpStatus, otp, setOtpField, otpMsg, otpTone, resendIn, sendOtp, verifyOtp, resetOtp };
}