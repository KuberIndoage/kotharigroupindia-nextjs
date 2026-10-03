import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';
import AppShell from '@/components/AppShell';
import {
  getSuccessStoriesDivision,
  SuccessStoriesHeader,
  SuccessStoriesFooter,
} from '@/components/successstories/DivisionChrome';
import { fetchWpBlogPostBySlug } from '@/lib/wp-posts';

export async function successStoryDetailMetadata(slug: string): Promise<Metadata> {
  const post = await fetchWpBlogPostBySlug(slug).catch(() => null);
  if (!post) return { title: 'Success Story | Kothari Group' };
  return {
    title: `${post.title} | Kothari Group`,
    description: post.excerpt.slice(0, 160),
  };
}

// Isolate the WP fetch so it cancels cleanly and gets a richer Suspense boundary.
async function Article({ slug, backPath }: { slug: string; backPath: string }) {
  const post = await fetchWpBlogPostBySlug(slug);
  if (!post) redirect('/');

  return (
    <>
      {/* Hero: original story image with glassy date card */}
      <div className="w-full bg-[#F5F6F8] pt-20 sm:pt-22">
        <div className="relative">
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          )}

          {/* Back to stories button - top left */}
          <Link
            href={backPath}
            className="hidden absolute top-4 sm:top-6 left-4 sm:left-6 lg:left-10 sm:inline-flex items-center gap-2 bg-[#1575B3] backdrop-blur-md shadow-lg hover:text-white text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase px-4 py-2.5 text-white hover:bg-[#00568f] hover:border-[#1575B3] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>

          {/* Glassy date card - bottom right */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 lg:right-10">
            <div className="bg-white/15 backdrop-blur-md border border-white/30 shadow-lg px-2 sm:px-7 py-2 sm:py-5 flex flex-col gap-3.5">
              <div>
                <span className="block text-[6px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-white/70">
                  Published on
                </span>
                <span className="flex items-center gap-2 text-[8px] sm:text-sm font-semibold text-white">
                  <Calendar className="w-2 h-2 sm:w-4 sm:h-4 text-white/90" />
                  {post.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title / Meta */}
      <div className="w-full bg-white border-b border-slate-300/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-10 sm:pb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.08] sm:leading-[1.04] m-0 p-0 max-w-7xl text-slate-900">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <article className="w-full bg-white py-12 sm:py-16 border-b border-slate-300/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div
            className="wp-blog-content"
            dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
          />
          <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-center gap-4">
            <Link
              href={backPath}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#1575B3] hover:text-[#0E588A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to stories
            </Link>
            <span className="text-xs font-light text-slate-400">Published by {post.author}</span>
          </div>
        </div>
      </article>
    </>
  );
}

const DetailSkeleton = () => (
  <div className="min-h-[60vh] bg-white flex items-center justify-center">
    <div className="w-full max-w-7xl px-4 sm:px-8 space-y-4">
      <div className="aspect-[16/9] w-full bg-slate-200 animate-pulse" />
      <div className="h-4 w-32 bg-slate-200 animate-pulse" />
      <div className="h-10 w-full bg-slate-200 animate-pulse" />
      <div className="h-10 w-3/4 bg-slate-200 animate-pulse" />
    </div>
  </div>
);

export const SuccessStoryDetail: React.FC<{
  slug: string;
  backPath: string;
}> = ({ slug, backPath }) => {
  const division = getSuccessStoriesDivision(backPath);

  return (
    <AppShell>
      <div className="text-left">
        <SuccessStoriesHeader division={division} solid />
        <Suspense fallback={<DetailSkeleton />}>
          <Article slug={slug} backPath={backPath} />
        </Suspense>
        <SuccessStoriesFooter division={division} />
      </div>
    </AppShell>
  );
};
