'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Award } from '@/lib/awards';

export const AwardCard: React.FC<{ award: Award }> = ({ award }) => {
  const [expanded, setExpanded] = useState(false);

  return (
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
          className="block w-full h-52 sm:h-56 object-cover object-top"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm font-mono tracking-widest text-slate-600 uppercase font-semibold">
            <span>{award.year}</span>
          </div>

          <h3 className="text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-[#1575B3] transition-colors duration-300 line-clamp-2">
            {award.title}
          </h3>

          <p className={`text-[15px] text-slate-700 font-normal leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
            {award.description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="self-start inline-flex items-center gap-1.5 p-0 bg-transparent border-0 cursor-pointer text-[10px] font-mono font-semibold tracking-[0.25em] uppercase text-slate-800 hover:text-[#1575B3] transition-colors"
        >
          {expanded ? 'Read Less' : 'Read More'}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>
    </article>
  );
};