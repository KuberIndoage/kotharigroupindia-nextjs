'use client';
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import {
  RECAPTCHA_SITE_KEY,
  getRecaptchaToken,
} from '@/lib/recaptcha-client';

const interests = [
  'Pipe Division',
  'Irrigation Division'
];

const iamOptions = [
  'Farmer',
  'Dealer',
  'Consultant',
  'Government',
  'Agri Professional',
  'Other'
];

const requirements = [
  'Product Enquiry',
  'Quotation',
  'Dealer / Distributor Enquiry',
  'Project Requirement',
  'After-Sales Support',
  'Other'
];

type OtpStatus = 'idle' | 'sending' | 'sent' | 'verifying' | 'verified';
type OtpTone = 'info' | 'error' | 'success';

export const ContactUsForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: interests[0],
    iam: iamOptions[0],
    requirement: requirements[0],
    otherRequirement: '',
  });

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

  const resetOtp = () => {
    setOtpStatus('idle');
    setOtp('');
    setOtpMsg('');
    setResendIn(0);
  };

  const setPhone = (phone: string) => {
    setFormData((prev) => ({ ...prev, phone }));
    if (phone !== formData.phone) resetOtp();
  };

  const handleSendOtp = async () => {
    if (otpStatus === 'sending' || resendIn > 0) return;
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setOtpTone('error');
      setOtpMsg('Enter a valid 10-digit mobile number first.');
      return;
    }
    setOtpStatus('sending');
    setOtpMsg('');
    try {
      const res = await fetch('/api/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: formData.phone,
          userName: formData.fullName || 'Website User',
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) throw new Error(data?.error || 'Could not send the OTP.');
      setOtpStatus('sent');
      setOtp('');
      setResendIn(data.resendIn || 30);
      setOtpTone('info');
      setOtpMsg(
        data.devOtp
          ? `Dev mode — AiSensy not configured. Your OTP is ${data.devOtp}`
          : `OTP sent to ${formData.phone} on WhatsApp. Enter it below.`
      );
    } catch (err) {
      setOtpStatus('idle');
      setOtpTone('error');
      setOtpMsg(err instanceof Error ? err.message : 'Could not send the OTP.');
    }
  };

  const handleVerifyOtp = async () => {
    if (otpStatus === 'verifying') return;
    if (!/^\d{6}$/.test(otp)) {
      setOtpTone('error');
      setOtpMsg('Enter the 6-digit OTP.');
      return;
    }
    setOtpStatus('verifying');
    setOtpMsg('');
    try {
      const res = await fetch('/api/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phone, otp }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) throw new Error(data?.error || 'Incorrect OTP.');
      setOtpStatus('verified');
      setOtpMsg('WhatsApp number verified.');
      setOtpTone('success');
    } catch (err) {
      setOtpStatus('sent');
      setOtpTone('error');
      setOtpMsg(err instanceof Error ? err.message : 'Incorrect OTP.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    if (otpStatus !== 'verified') {
      setOtpTone('error');
      setOtpMsg('Please verify your phone number with the WhatsApp OTP first.');
      return;
    }
    setError('');
    setSending(true);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        if (data?.verifyRequired) {
          resetOtp();
          throw new Error(data?.error || 'Your OTP verification expired. Please verify again.');
        }
        throw new Error(data?.error || 'Could not send your enquiry.');
      }
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          interest: interests[0],
          iam: iamOptions[0],
          requirement: requirements[0],
          otherRequirement: '',
        });
        resetOtp();
      }, 6000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send your enquiry.');
    } finally {
      setSending(false);
    }
  };

  const fieldClass =
    'w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition';
  const labelClass =
    'block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5';
  const otpBtnClass =
    'shrink-0 px-3.5 py-2.5 text-xs font-semibold border border-[#1575B3] text-[#1575B3] bg-white hover:bg-[#F5FAFF] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition';

  if (submitted) {
    return (
      <div className="h-full min-h-[28rem] flex flex-col items-center justify-center text-center p-6">
        <CheckCircle2 className="w-14 h-14 text-[#1E8E3E]" />
        <h3 className="text-2xl font-semibold text-[#111111] mt-4">
          Thank You For Reaching Out!
        </h3>
        <p className="text-sm text-[#5F6B7A] max-w-md mt-2">
          Your inquiry has been received. Our team will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Full Name *</label>
        <input
          type="text"
          required
          placeholder="e.g. Rajesh Kumar"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <div className="flex gap-2">
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setPhone(e.target.value)}
              className={fieldClass}
            />
            {otpStatus !== 'verified' && (
              <button
                type="button"
                onClick={handleSendOtp}
                disabled={otpStatus === 'sending' || resendIn > 0}
                className={otpBtnClass}
              >
                {otpStatus === 'sending'
                  ? 'Sending…'
                  : resendIn > 0
                    ? `Resend ${resendIn}s`
                    : otpStatus === 'idle'
                      ? 'Send OTP'
                      : 'Resend OTP'}
              </button>
            )}
          </div>
        </div>
      </div>

      {otpStatus === 'verified' && (
        <div className="flex flex-wrap items-center justify-between gap-2 border border-[#1E8E3E]/30 bg-[#F4FBF6] px-3.5 py-2.5">
          <span className="flex items-center gap-2 text-xs font-medium text-[#1E8E3E]">
            <CheckCircle2 className="w-4 h-4" />
            {formData.phone} verified on WhatsApp
          </span>
          <button
            type="button"
            onClick={resetOtp}
            className="text-xs font-medium text-[#1575B3] underline underline-offset-2 hover:text-[#0E588A]"
          >
            Change number
          </button>
        </div>
      )}

      {(otpStatus === 'sent' || otpStatus === 'verifying') && (
        <div className="border border-[#DCEAF5] bg-[#F8FBFE] p-3.5 space-y-2.5">
          <div className="flex gap-2">
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleVerifyOtp();
                }
              }}
              className={`${fieldClass} tracking-[0.4em] text-center font-semibold`}
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              disabled={otpStatus === 'verifying' || otp.length !== 6}
              className="shrink-0 px-4 py-2.5 text-xs font-semibold bg-[#1575B3] hover:bg-[#0E588A] disabled:opacity-60 disabled:cursor-not-allowed text-white transition active:scale-[0.98]"
            >
              {otpStatus === 'verifying' ? (
                <span className="flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> Verifying
                </span>
              ) : (
                'Verify OTP'
              )}
            </button>
          </div>
          {otpMsg && (
            <p
              className={`text-xs ${
                otpTone === 'error'
                  ? 'text-red-600'
                  : otpTone === 'success'
                    ? 'text-[#1E8E3E]'
                    : 'text-[#5F6B7A]'
              }`}
            >
              {otpMsg}
            </p>
          )}
        </div>
      )}

      <div>
        <span className={labelClass}>Interested in *</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {interests.map((interest) => (
            <label
              key={interest}
              className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition ${
                formData.interest === interest
                  ? 'border-[#1575B3] bg-[#F5FAFF] text-[#0E588A]'
                  : 'border-[#DCEAF5] bg-white text-[#5F6B7A] hover:border-[#1575B3]/50'
              }`}
            >
              <input
                type="radio"
                name="interest"
                value={interest}
                checked={formData.interest === interest}
                onChange={() => setFormData({ ...formData, interest })}
                className="accent-[#1575B3]"
              />
              <span className="text-sm font-medium">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>I Am *</label>
        <select
          required
          value={formData.iam}
          onChange={(e) => setFormData({ ...formData, iam: e.target.value })}
          className={fieldClass}
        >
          {iamOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Requirement</label>
        <select
          value={formData.requirement}
          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
          className={fieldClass}
        >
          {requirements.map((req) => (
            <option key={req} value={req}>{req}</option>
          ))}
        </select>
      </div>

      {formData.requirement === 'Other' && (
        <div>
          <label className={labelClass}>Other Requirement</label>
          <textarea
            rows={4}
            placeholder="Please specify your requirement..."
            value={formData.otherRequirement}
            onChange={(e) => setFormData({ ...formData, otherRequirement: e.target.value })}
            className={`${fieldClass} resize-none`}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={sending || otpStatus !== 'verified'}
        className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 font-medium text-sm transition-colors shadow-sm"
      >
        {sending ? 'Sending…' : otpStatus !== 'verified' ? 'Verify OTP to Submit' : 'Submit'}
        <Send className="w-4 h-4" />
      </button>
      {otpStatus !== 'verified' && !otpMsg && (
        <p className="text-[11px] text-[#5F6B7A] -mt-2">
          Verify your WhatsApp number with the OTP to enable submission.
        </p>
      )}
      {(error || (otpStatus !== 'verified' && otpMsg && !['sent', 'verifying'].includes(otpStatus))) && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2">
          {error || otpMsg}
        </p>
      )}
      {RECAPTCHA_SITE_KEY && (
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Protected by reCAPTCHA — the Google{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-500"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-500"
          >
            Terms of Service
          </a>{' '}
          apply.
        </p>
      )}
    </form>
    </>
  );
};
