'use client';
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import type { SolutionFaq } from '@/data/solutions';

export const SolutionFaqs: React.FC<{ faqs: SolutionFaq[]; theme?: 'blue' | 'green' }> = ({ faqs, theme = 'blue' }) => {
  const isGreen = theme === 'green';
  const accent = isGreen ? 'text-[#1E8E3E]' : 'text-[#1575B3]';
  const accentBorder = isGreen ? 'border-[#1E8E3E]' : 'border-[#1575B3]';
  const accentHoverBorder = isGreen ? 'hover:border-[#1E8E3E]/40' : 'hover:border-[#1575B3]/40';
  const [open, setOpen] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`border bg-white transition-all ${
                  isOpen ? `${accentBorder} shadow-md` : `border-slate-200 ${accentHoverBorder}`
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold ${
                      isOpen ? accent : 'text-slate-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className={`w-5 h-5 ${accent} shrink-0`} />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};