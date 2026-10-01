import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ApplicationDetail } from '@/data/applications';
import { getRelatedApplications } from '@/data/applications';
import {
  ApplicationDetailSection,
  ApplicationSectionHeading,
} from './ApplicationDetailSection';

export const ApplicationDetailRelated: React.FC<{ detail: ApplicationDetail }> = ({ detail }) => {
  const related = getRelatedApplications(detail);
  if (!related) return null;

  const isPipe = detail.division === 'pipe-division';
  const accentText = isPipe ? 'text-[#1575B3]' : 'text-[#1E8E3E]';

  return (
    <ApplicationDetailSection tinted isPipe={isPipe}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
            {related.groupTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl font-normal leading-relaxed mt-4">
            {related.groupIntro}
          </p>
        </div>
        <Link
          href={detail.parentHref}
          className={`inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] uppercase ${accentText} hover:opacity-70 transition-opacity shrink-0`}
        >
          All {detail.parentLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {related.items.map((item) => (
          <Link
            key={item.title}
            href={detail.parentHref}
            className="group block h-full bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          >
            <div className="relative h-48 w-full overflow-hidden border-b border-slate-200">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-7">
              <h3 className="text-lg sm:text-xl font-serif font-light uppercase tracking-tight text-slate-900 m-0 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed mt-3 mb-0">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </ApplicationDetailSection>
  );
};