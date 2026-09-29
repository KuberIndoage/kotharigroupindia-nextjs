'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/main/Reveal';
import type { Award } from '@/lib/awards';

interface AwardsGalleryProps {
  awards: Award[];
  categories: string[];
}

export const AwardsGallery: React.FC<AwardsGalleryProps> = ({ awards, categories }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? awards : awards.filter((a) => a.category === activeCategory);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
  };

  return (
    <div>
      {/* Filter by category heading + tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-300">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
          Filter by category
        </h2>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap -mx-4 sm:mx-0 px-4 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`shrink-0 px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1575B3] border-[#1575B3] text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Awards Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((award, i) => (
            <Reveal key={award.id} delay={(i % 3) * 90} className="h-full">
              <Link href={`/awards/${award.slug}`} className="block h-full">
              <article className="group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden">
                <div className="relative border-b border-slate-200">
                  <img
                    src={award.image}
                    alt={award.alt || award.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.opacity = '0.3';
                    }}
                    className="block w-full h-51 object-cover object-top"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-500 uppercase font-medium">
                      <span>{award.year}</span>
                    </div>

                    <h3 className="text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-[#1575B3] transition-colors duration-300 line-clamp-2">
                      {award.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                      {award.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase group-hover:text-[#1575B3] transition-colors">
                    <span>READ AWARD</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </article>
              </Link>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-sm text-slate-500">No awards found in this category.</p>
        </div>
      )}
    </div>
  );
};