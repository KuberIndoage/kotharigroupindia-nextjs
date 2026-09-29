'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/main/Reveal';
import type { KnowledgeItem } from '@/lib/knowledge-centre';

interface KnowledgeCardProps {
  item: KnowledgeItem;
  index: number;
  onRequest?: (item: KnowledgeItem) => void;
}

export const KnowledgeCard: React.FC<KnowledgeCardProps> = ({
  item,
  index,
  onRequest,
}) => {
  return (
    <Reveal key={item.title} delay={(index % 3) * 90} className="h-full">
      <article className="group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden">
        <div className="relative overflow-hidden bg-slate-900 border-b border-slate-200">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLElement;
              target.style.opacity = '0.3';
            }}
            className="w-full aspect-[16/10] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <h3 className="text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-[#1575B3] transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-4">
              {item.description}
            </p>
          </div>

          {/* Learn More → request modal */}
          <button
            onClick={() => onRequest?.(item)}
            className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase group-hover:text-[#1575B3] transition-colors cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </article>
    </Reveal>
  );
};