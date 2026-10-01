import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Solution, SolutionChildSolution } from '@/data/solutions';
import { getChildSolutions } from '@/data/solutions';
import { SolutionChildHero } from './SolutionChildHero';
import { SolutionOverview } from './SolutionOverview';
import { SolutionPillars } from './SolutionPillars';
import { SolutionWhyChoose } from './SolutionWhyChoose';
import { SolutionApplications } from './SolutionApplications';
import { SolutionRelatedProducts } from './SolutionRelatedProducts';
import { SolutionChildSolutions } from './SolutionChildSolutions';
import { SolutionFaqs } from './SolutionFaqs';
import { SolutionCta } from './SolutionCta';

export const SolutionChildPageTemplate: React.FC<{
  solution: Solution;
  child: SolutionChildSolution;
  theme?: 'blue' | 'green';
}> = ({ solution, child, theme = 'green' }) => {
  const isGreen = theme === 'green';
  const accentText = isGreen ? 'text-[#1E8E3E]' : 'text-[#1575B3]';
  const otherChildren = getChildSolutions(solution.slug).filter((c) => c.slug !== child.slug);

  return (
    <>
      <SolutionChildHero solution={solution} child={child} />
      <SolutionOverview overview={child.overview} />
      <SolutionPillars pillars={child.pillars} theme={theme} />
      <SolutionWhyChoose points={child.whyChoose} theme={theme} />
      <SolutionApplications applications={child.applications} theme={theme} />
      <SolutionRelatedProducts products={child.relatedProducts} theme={theme} />

      {/* {otherChildren.length > 0 && (
        <section className={`w-full bg-white py-16 sm:py-24 border-b ${isGreen ? 'border-[#1E8E3E]/15' : 'border-slate-300/70'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
            <div className="border-b border-slate-300 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
                Other Sub-Solutions
              </h2>
              <Link
                href={`/solutions/${solution.slug}`}
                className={`inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] uppercase ${accentText} hover:opacity-70 transition-opacity sm:mb-1 shrink-0`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {solution.h1}
              </Link>
            </div>
            <SolutionChildSolutions
              solutions={{
                heading: '',
                description: '',
                items: otherChildren,
              }}
              theme={theme}
            />
          </div>
        </section>
      )} */}

      <SolutionFaqs faqs={child.faqs} theme={theme} />
      <SolutionCta child={child} theme={theme} />
    </>
  );
};