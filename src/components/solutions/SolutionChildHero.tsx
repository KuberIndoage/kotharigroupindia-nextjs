import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Solution, SolutionChildSolution } from '@/data/solutions';

export const SolutionChildHero: React.FC<{
  solution: Solution;
  child: SolutionChildSolution;
}> = ({ solution, child }) => {
  const featured = child.relatedProducts[0];
  const homeHref = solution.division === 'pipe' ? '/pipe-division' : '/irrigation-division';

  return (
    <div className="relative w-full  min-h-[40dvh] sm:min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={child.image}
          alt={child.h1}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />

        {/* Base Dark Overlay */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Top-Heavy Gradient Overlay for increased top contrast and navbar contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
      </div>

      {/* Main Container - Full Height Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full  min-h-[40dvh] sm:min-h-[100dvh] pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-white/60 overflow-x-auto whitespace-nowrap shrink-0">
          <Link href={homeHref} className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link href={`/solutions/${solution.slug}`} className="hover:text-white transition-colors">{solution.h1}</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-white/90 truncate max-w-[220px] sm:max-w-[320px]">{child.h1}</span>
        </nav>

        {/* Headline Section - Centered Vertically */}
        <div className="w-full flex flex-col gap-5 sm:gap-6 my-auto py-8">
          <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
            {solution.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
            {child.h1}
          </h1>
          <p className="text-base sm:text-xl font-semibold text-white leading-snug max-w-3xl drop-shadow-md">
            {child.tagline}
          </p>
        </div>

        {/* Stats Grid & Callout Card - Anchored at Bottom */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-stretch lg:items-end gap-6 sm:gap-8 lg:gap-12 w-full mt-auto">

          {/* Left Side: Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 w-full lg:w-auto border-t border-white/20 pt-6">
            {[
              { value: '35+', label: 'Years of excellence' },
              { value: '23+', label: 'States served pan-India' },
              { value: '2L+', label: 'Farmers empowered' },
              { value: '800+', label: 'Channel partners' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {featured && (
            <Link
              href={`/${featured.categorySlug}/${featured.slug}`}
              className="group w-full lg:w-auto lg:max-w-[340px] shrink-0"
            >
              <div className="bg-black/50 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-sm shadow-2xl group-hover:border-white/40 transition-colors">
                <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr] gap-3.5 items-center">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xs group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-semibold text-sm text-white leading-snug line-clamp-1">{featured.name}</p>
                    <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                      {featured.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}

        </div>

      </div>
    </div>
  );
};