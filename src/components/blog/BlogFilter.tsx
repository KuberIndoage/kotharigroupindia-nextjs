import React from 'react';
import Link from 'next/link';

export type DivisionFilter = 'pipe' | 'irrigation' | null;

const TABS: { key: 'all' | 'pipe' | 'irrigation'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'pipe', label: 'Pipe Division' },
  { key: 'irrigation', label: 'Irrigation Division' },
];

export const BlogFilter: React.FC<{
  division: DivisionFilter;
  basePath?: string;
}> = ({ division, basePath = '/blogs' }) => {
  const active: 'all' | 'pipe' | 'irrigation' = division ?? 'all';

  const buildHref = (key: 'all' | 'pipe' | 'irrigation') =>
    basePath + (key === 'all' ? '' : `?division=${key}`);

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-300">
      {/* Left: heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
        Filter by category
      </h2>

      {/* Right: filter tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap -mx-4 sm:mx-0 px-4 sm:px-0">
        {TABS.map((tab) => (
          <Link
            key={tab.key}
            href={buildHref(tab.key)}
            scroll={false}
            className={`shrink-0 px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase border transition-all duration-200 ${
              active === tab.key
                ? 'bg-[#1575B3] border-[#1575B3] text-white'
                : 'bg-white border-slate-200 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};