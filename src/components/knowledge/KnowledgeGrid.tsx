'use client';

import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { KnowledgeCard } from '@/components/knowledge/KnowledgeCard';
import { KnowledgeRequestModal } from '@/components/knowledge/KnowledgeRequestModal';
import { allKnowledgeItems } from '@/lib/knowledge-centre';
import type { KnowledgeItem } from '@/lib/knowledge-centre';

type DivisionTab = 'all' | 'pipe' | 'irrigation';

const TABS: { key: DivisionTab; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'pipe', label: 'Pipe Division' },
  { key: 'irrigation', label: 'Irrigation Division' },
];

export const KnowledgeGrid: React.FC = () => {
  const [active, setActive] = useState<DivisionTab>('all');
  const [requestItem, setRequestItem] = useState<KnowledgeItem | null>(null);

  const filtered =
    active === 'all'
      ? allKnowledgeItems
      : allKnowledgeItems.filter((item) => item.division === active);

  return (
    <div>
      {/* Filter by category heading + tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-300">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
          Filter by category
        </h2>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap -mx-4 sm:mx-0 px-4 sm:px-0">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`shrink-0 px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase border transition-all duration-200 ${
                active === tab.key
                  ? 'bg-[#1575B3] border-[#1575B3] text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Knowledge Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <KnowledgeCard
              key={item.title}
              item={item}
              index={i}
              onRequest={setRequestItem}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="w-16 h-16 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center mb-5">
            <BookOpen className="w-7 h-7 text-slate-300" />
          </span>
          <h3 className="text-xl font-semibold text-slate-900">No guides found</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-sm">
            We could not find any knowledge guides in this category. Please check
            back later.
          </p>
        </div>
      )}

      <KnowledgeRequestModal
        item={requestItem}
        onClose={() => setRequestItem(null)}
      />
    </div>
  );
};