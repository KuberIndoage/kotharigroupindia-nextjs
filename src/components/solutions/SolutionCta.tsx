import React from 'react';
import Link from 'next/link';
import type { SolutionChildSolution } from '@/data/solutions';

export const SolutionCta: React.FC<{
  child: SolutionChildSolution;
  theme?: 'blue' | 'green';
}> = ({ child, theme = 'green' }) => {
  const isGreen = theme === 'green';
  const accentBg = isGreen ? 'bg-[#1E8E3E]' : 'bg-[#1575B3]';
  const accentBgHover = isGreen ? 'hover:bg-[#167A35]' : 'hover:bg-[#0E588A]';
  const accentBorder = isGreen ? 'border-[#1E8E3E]' : 'border-[#1575B3]';
  const accentText = isGreen ? 'text-[#1E8E3E]' : 'text-[#1575B3]';
  const accentHover = isGreen ? 'hover:bg-[#1E8E3E] hover:border-[#1E8E3E]' : 'hover:bg-[#1575B3] hover:border-[#1575B3]';

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        <div className="relative min-h-[320px] overflow-hidden">
          <img
            src={child.image}
            alt={child.h1}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center py-4 lg:py-8">
          <span className={`text-[11px] font-mono tracking-[0.25em] uppercase ${accentText} font-semibold mb-4`}>
            Engineered for Indian farms
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0 leading-tight">
            Build your complete {child.h1.toLowerCase()} system with Kothari.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-6 m-0 max-w-xl">
            Talk to our irrigation engineers for a system designed around your crop,
            water source and field layout — backed by 35+ years of agri-piping expertise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact-us"
              className={`inline-flex items-center justify-center gap-2 ${accentBg} ${accentBgHover} text-white px-7 py-3.5 text-sm font-medium transition-colors`}
            >
              Get in touch
            </Link>
            <Link
              href="/become-dealer"
              className={`inline-flex items-center justify-center gap-2 border ${accentBorder} ${accentText} hover:text-white ${accentHover} px-7 py-3.5 text-sm font-medium transition-colors`}
            >
              Become a Dealer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};