import React from 'react';
import type { ApplicationDetail } from '@/data/applications';
import {
  ApplicationDetailSection,
  ApplicationSectionHeading,
} from './ApplicationDetailSection';

export const ApplicationDetailWhereUsed: React.FC<{
  whereUsed: ApplicationDetail['whereUsed'];
  isPipe: boolean;
}> = ({ whereUsed, isPipe }) => {
  // const accent = isPipe ? 'border-[#1575B3]' : 'border-[#1E8E3E]';
  // const accentText = isPipe ? 'text-[#1575B3]' : 'text-[#1E8E3E]';
  const accent = isPipe ? 'border-[#1575B3]' : 'border-[#1575B3]';
  const accentText = isPipe ? 'text-[#1575B3]' : 'text-[#1575B3]';

  return (
    <ApplicationDetailSection tinted isPipe={isPipe}>
      <ApplicationSectionHeading title={whereUsed.heading} />
      <div className="space-y-6 max-w-4xl">
        {whereUsed.intro.map((paragraph, idx) => (
          <p
            key={idx}
            className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed m-0"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-12 list-none p-0 m-0">
        {whereUsed.items.map((item) => (
          <li key={item.label} className={`border-l-2 ${accent} pl-5`}>
            <h3 className="text-lg sm:text-xl font-serif font-light uppercase tracking-tight text-slate-900 m-0">
              <span className={accentText}>{item.label}</span>
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-3 mb-0">
              {item.text}
            </p>
          </li>
        ))}
      </ul>

      {whereUsed.note && (
        <p
          className={`text-sm sm:text-[15px] text-slate-700 font-normal leading-relaxed mt-12 mb-0 max-w-3xl border-t ${
            // isPipe ? 'border-slate-300' : 'border-[#1E8E3E]/20'
            isPipe ? 'border-slate-300' : 'border-slate-300'
          } pt-6`}
        >
          {whereUsed.note}
        </p>
      )}
    </ApplicationDetailSection>
  );
};