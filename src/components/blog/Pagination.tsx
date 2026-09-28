import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  page: number;
  totalPages: number;
  basePath?: string;
  division?: 'pipe' | 'irrigation' | null;
}

function buildPageList(current: number, total: number): (number | '…')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: (number | '…')[] = [1];
  if (current > 3) pages.push('…');
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push('…');
  pages.push(total);
  return pages;
}

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, basePath = '/blogs', division = null }) => {
  if (totalPages <= 1) return null;

  const buildHref = (p: number) =>
    division ? `${basePath}?division=${division}&page=${p}` : `${basePath}?page=${p}`;

  const pageList = buildPageList(page, totalPages);

  const linkClasses = (active: boolean) =>
    `w-10 h-10 flex items-center justify-center text-sm font-mono border transition-all duration-200 ${
      active
        ? 'bg-[#1575B3] border-[#1575B3] text-white font-semibold'
        : 'bg-white border-slate-200 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
    }`;

  return (
    <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2 flex-wrap">
      {page > 1 ? (
<Link
            href={buildHref(page - 1)}
            scroll={false}
          aria-label="Previous page"
          className="h-10 px-3 flex items-center justify-center gap-1 text-sm font-mono border border-slate-200 bg-white text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3] transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </Link>
      ) : (
        <span className="h-10 px-3 flex items-center justify-center gap-1 text-sm font-mono border border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          Prev
        </span>
      )}

      {pageList.map((p, i) =>
        typeof p === 'number' ? (
          <Link key={i} href={buildHref(p)} scroll={false} className={linkClasses(p === page)}>
            {p}
          </Link>
        ) : (
          <span key={i} className="w-10 h-10 flex items-center justify-center text-slate-400">
            {p}
          </span>
        )
      )}

      {page < totalPages ? (
        <Link
          href={buildHref(page + 1)}
          scroll={false}
          aria-label="Next page"
          className="h-10 px-3 flex items-center justify-center gap-1 text-sm font-mono border border-slate-200 bg-white text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3] transition-all duration-200"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className="h-10 px-3 flex items-center justify-center gap-1 text-sm font-mono border border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed">
          Next
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
};