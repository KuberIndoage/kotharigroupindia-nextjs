import React from 'react';
import { SectionHeader } from './SectionHeader';
import type { SolutionPillar } from '@/data/solutions';

export const SolutionPillars: React.FC<{
  pillars: SolutionPillar[];
  title?: string;
  description?: string;
  theme?: 'blue' | 'green';
}> = ({
  pillars,
  title = 'Key Pillars',
  description = 'The engineering principles every system in this solution is built on.',
  theme = 'blue',
}) => {
  const isGreen = theme === 'green';
  const accentBorder = isGreen ? 'border-[#1E8E3E]' : 'border-[#1575B3]';
  const accentText = isGreen ? 'text-[#1E8E3E]' : 'text-[#1575B3]';
  if (!pillars.length) return null;
  return (
    <section className={`w-full ${isGreen ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} py-16 sm:py-24 border-b ${isGreen ? 'border-[#1E8E3E]/15' : 'border-slate-300/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader title={title} description={description} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 list-none p-0 m-0">
          {pillars.map((pillar) => (
            <li key={pillar.label} className={`border-l-2 ${accentBorder} pl-5`}>
              <h3 className="text-lg sm:text-xl font-serif font-light uppercase tracking-tight text-slate-900 m-0">
                <span className={accentText}>{pillar.label}</span>
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-3 mb-0">
                {pillar.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
