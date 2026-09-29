'use client';

import React, { useEffect, useState } from 'react';
import { X, Phone, Mail, MapPin, Send, ArrowRight, FileText } from 'lucide-react';
import { RECAPTCHA_SITE_KEY, getRecaptchaToken } from '@/lib/recaptcha-client';
import type { KnowledgeItem } from '@/lib/knowledge-centre';

interface KnowledgeRequestModalProps {
  item: KnowledgeItem | null;
  onClose: () => void;
}

const inputCls =
  'w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition';

export const KnowledgeRequestModal: React.FC<KnowledgeRequestModalProps> = ({
  item,
  onClose,
}) => {
  const open = !!item;
  const languages: [string, string][] = item
    ? Object.entries(
        Object.assign({}, ...item.lang) as Record<string, string>
      )
    : [];
  const hasLanguageOptions = languages.length > 1;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [language, setLanguage] = useState(languages[0]?.[0] ?? 'English');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (item) {
      setSubmitted(false);
      setSending(false);
      setError('');
      setLanguage(languages[0]?.[0] ?? 'English');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, item?.title]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!item) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setError('');
    setSending(true);
    try {
      const documentUrl =
        languages.find(([label]) => label === language)?.[1] ?? '';
      if (!documentUrl) {
        throw new Error('Guide document is not available for this language.');
      }
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch('/api/knowledge-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          pincode,
          language,
          guide: item.title,
          division:
            item.division === 'pipe' ? 'Pipe Division' : 'Irrigation Division',
          documentUrl,
          recaptchaToken,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Could not send your request.');
      }
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setFullName('');
        setEmail('');
        setPhone('');
        setPincode('');
      }, 2500);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Could not send your request.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        <div className="relative w-full max-w-4xl bg-white border border-[#DCEAF5] shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-[#5F6B7A] hover:text-[#111111] hover:bg-[#F5FAFF] transition border border-transparent hover:border-[#DCEAF5]"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="hidden md:flex md:w-5/12 bg-[#0E588A] text-white p-6 sm:p-8 flex-col justify-between shrink-0">
            <div>
              <img
                src="/logos/Kothari Group_W2.png"
                alt="Kothari Group Logo"
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain mb-5"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }} 
              />
              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white mb-4">
                Request our knowledge guides.
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-8">
                Tell us which guide you need and your preferred language. Our
                experts will share the documentation and answer any questions.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/15">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/60 uppercase">Phone</span>
                  <span className="text-sm font-medium text-white">+91 1800 120 4343</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/60 uppercase">Email</span>
                  <span className="text-sm font-medium text-white">
                    {item.division === 'pipe'
                      ? 'sales.pipe@kotharigroupindia.com'
                      : 'sales.irrigation@kotharigroupindia.com'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/60 uppercase">Headquarters</span>
                  <a
                    href="https://maps.app.goo.gl/qCPHM3aF8EQkpaBw7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-white hover:underline"
                  >
                    Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413001, Maharashtra
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-6 sm:p-8 bg-white overflow-y-auto">
            {submitted ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 bg-[#EAF8EF] text-[#1E8E3E] flex items-center justify-center mb-4 border border-[#1E8E3E]/20">
                  <Send className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-semibold text-[#111111] mb-2">Request Submitted</h4>
                <p className="text-sm text-[#5F6B7A] max-w-md">
                  Your guide is on its way to your email inbox. A representative
                  from Kothari Group will also contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-[#111111] mb-1">Request a Guide</h4>
                  <p className="text-xs text-[#5F6B7A] mb-4">
                    Fill in your details so our team can send the documentation your way.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                    Guide
                  </label>
                  <div className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1575B3] shrink-0" />
                    {item.title}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={inputCls}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 "
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Pincode
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="e.g. 413001"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Preferred Language
                    </label>
                    {hasLanguageOptions ? (
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className={`${inputCls} cursor-pointer`}
                      >
                        {languages.map(([label]) => (
                          <option key={label} value={label}>
                            {label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111]">
                        {languages[0]?.[0] ?? 'English'}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 font-medium text-sm transition-colors shadow-sm mt-2"
                >
                  {sending ? 'Submitting…' : 'Submit Request'}
                  <ArrowRight className="w-4 h-4" />
                </button>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2">
                    {error}
                  </p>
                )}
                {RECAPTCHA_SITE_KEY && (
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Protected by reCAPTCHA - the Google{' '}
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
            )}
</div>
      </div>
    </div>
  );
};