'use client';

import React, { useState } from 'react';
import { Reveal } from '@/components/main/Reveal';
import { AwardCard } from './AwardCard';
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
              <AwardCard award={award} />
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