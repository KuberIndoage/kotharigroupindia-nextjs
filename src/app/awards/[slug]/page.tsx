import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Award as AwardIcon } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { awardsData } from '@/lib/awards';

interface Params {
  slug: string;
}

function getAward(slug: string) {
  const award = awardsData.awards.find((a) => a.slug === slug);
  if (!award) notFound();
  return award;
}

export function generateStaticParams(): Params[] {
  return awardsData.awards.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const award = awardsData.awards.find((a) => a.slug === slug);
  if (!award) return { title: 'Award | Kothari Group' };
  return {
    title: `${award.title} | Kothari Group`,
    description: award.description.slice(0, 160),
  };
}

export default async function AwardDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const award = getAward(slug);

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header solid />

        {/* Hero: award image with glassy prev/written card */}
        <div className="w-full bg-[#F5F6F8] pt-20 sm:pt-22 border-b border-blue-200/30">
          <div className="relative">
            <img
              src={award.image}
              alt={award.alt || award.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />

            {/* Back to Awards button - top left */}
            <Link
              href="/awards"
              className="hidden absolute top-4 sm:top-6 left-4 sm:left-6 lg:left-10 sm:inline-flex items-center gap-2 bg-[#1575B3] backdrop-blur-md shadow-lg hover:text-white text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase px-4 py-2.5 text-white hover:bg-[#00568f] hover:border-[#1575B3] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Awards
            </Link>

            {/* Glassy byline card - bottom right */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 lg:right-10">
              <div className="bg-[#1575B3]  backdrop-blur-md border border-white/30 shadow-lg px-2 sm:px-7 py-2 sm:py-5 flex flex-col gap-3.5">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white text-[#1575B3]/90 flex items-center justify-center">
                    <AwardIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </span>
                  <div>
                    <span className="block text-[6px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-white/70">
                      Published by
                    </span>
                    <span className="block text-[9px] sm:text-sm font-semibold text-white leading-snug">
                      {'Kothari Group'}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/20">
                  <span className="block text-[6px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-white/70">
                    Award Year
                  </span>
                  <span className="flex items-center gap-2 text-[8px] sm:text-sm font-semibold text-white">
                    <Calendar className="w-2 h-2 sm:w-4 sm:h-4 text-white/90" />
                    {award.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title / Meta */}
        <div className="w-full bg-white border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-10 sm:pb-12">
            <span className="inline-block text-[11px] font-mono tracking-[0.2em] uppercase text-[#1575B3] font-medium mb-3">
              {award.category} &bull; {award.year}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.08] sm:leading-[1.04] m-0 p-0 max-w-7xl text-slate-900">
              {award.title}
            </h1>
          </div>
        </div>

        {/* Article Body */}
        <article className="w-full bg-white py-12 sm:py-16 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="wp-blog-content">
              <p>{award.description}</p>
            </div>

            {award.presentedBy && (
              <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 mb-1">
                    Presented by
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-800">
                    {award.presentedBy}
                  </span>
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-slate-200">
              <Link
                href="/awards"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#1575B3] hover:text-[#0E588A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to awards
              </Link>
            </div>
          </div>
        </article>

        <Home2Footer />
      </div>
    </AppShell>
  );
}