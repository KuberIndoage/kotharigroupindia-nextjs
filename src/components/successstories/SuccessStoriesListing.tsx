import React, { Suspense } from 'react';
import { Newspaper } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogFilter, type DivisionFilter } from '@/components/blog/BlogFilter';
import { Pagination } from '@/components/blog/Pagination';
import { StaticVideoGallery } from '@/components/video/StaticVideoGallery';
import type { KothariVideo } from '@/lib/video';
import {
  getSuccessStoriesDivision,
  SuccessStoriesHeader,
  SuccessStoriesFooter,
} from '@/components/successstories/DivisionChrome';
import {
  fetchWpBlogPosts,
  fetchWpPostsByCategorySlugs,
  WP_CATEGORIES,
} from '@/lib/wp-posts';

const POSTS_PER_PAGE = 9;

const DIVISION_CATEGORY_SLUGS: Record<'pipe' | 'irrigation', string[]> = {
  pipe: ['pipe-success-story'],
  irrigation: ['irrigation-success-story'],
};

async function StoriesGrid({
  page,
  division,
  detailBasePath,
  paginationBasePath,
  paginationDivision,
}: {
  page: number;
  division: DivisionFilter;
  detailBasePath: string;
  paginationBasePath: string;
  paginationDivision: DivisionFilter;
}) {
  let posts: Awaited<ReturnType<typeof fetchWpBlogPosts>>['posts'];
  let totalPages = 1;
  let safePage = page;

  if (division === 'pipe' || division === 'irrigation') {
    const all = await fetchWpPostsByCategorySlugs(
      DIVISION_CATEGORY_SLUGS[division],
      100
    );
    const total = all.length;
    totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
    const currentPage = Math.min(Math.max(1, page), totalPages);
    safePage = currentPage;
    posts = all.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);
  } else {
    const res = await fetchWpBlogPosts(page, POSTS_PER_PAGE, WP_CATEGORIES.successStory);
    posts = res.posts;
    totalPages = res.totalPages;
    safePage = page;
  }

  return (
    <>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} basePath={detailBasePath} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="w-16 h-16 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center mb-5">
            <Newspaper className="w-7 h-7 text-slate-300" />
          </span>
          <h3 className="text-xl font-semibold text-slate-900">No success stories found</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-sm">
            We could not find any published success stories. Please check back later.
          </p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="pt-12 flex flex-col items-center gap-4">
          <Pagination
            page={safePage}
            totalPages={totalPages}
            basePath={paginationBasePath}
            division={paginationDivision}
          />
        </div>
      )}
    </>
  );
}

const GridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="border border-slate-200/90 bg-white shadow-sm overflow-hidden">
        <div className="aspect-[16/10] bg-slate-200 animate-pulse" />
        <div className="p-6 space-y-3">
          <div className="h-3 w-24 bg-slate-200 animate-pulse" />
          <div className="h-5 w-full bg-slate-200 animate-pulse" />
          <div className="h-4 w-3/4 bg-slate-200 animate-pulse" />
        </div>
      </div>
    ))}
  </div>
);

export const SuccessStoriesListing: React.FC<{
  page: number;
  division?: DivisionFilter;
  title: string;
  subtitle: string;
  showFilter?: boolean;
  detailBasePath?: string;
  paginationBasePath?: string;
  videos?: KothariVideo[];
  playlistId?: string;
  videosTitle?: string;
  videosDescription?: string;
  storiesTitle?: string;
  storiesDescription?: string;
}> = ({
  page,
  division = null,
  title,
  subtitle,
  showFilter = false,
  detailBasePath = '/successstories',
  paginationBasePath,
  videos,
  playlistId,
  videosTitle = 'Success Story Videos',
  videosDescription = 'Real farmer stories, filmed on the field.',
  storiesTitle,
  storiesDescription = 'The challenge, the solution and the result.',
}) => {
  const pageBasePath = paginationBasePath ?? detailBasePath;
  const chromeDivision = getSuccessStoriesDivision(pageBasePath, division);

  return (
    <AppShell>
      <div className="text-left">
        <SuccessStoriesHeader division={chromeDivision} />

        {/* Hero */}
        <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/heronew.jpg"
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full min-h-[50dvh] pt-28 sm:pt-32 pb-10 flex flex-col justify-between">
            <div className="flex flex-col gap-5 sm:gap-6 my-auto py-8">
              <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                Kothari Group
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
                {title}
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Videos */}
        {videos && videos.length > 0 && (
          <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-300">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
                  {videosTitle}
                </h2>
                {/* {playlistId && (
                  <a
                    href={`https://www.youtube.com/playlist?list=${playlistId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase border border-[#1E8E3E] text-[#1E8E3E] hover:bg-[#1E8E3E] hover:text-white transition-all duration-200"
                  >
                    View playlist
                  </a>
                )} */}
                <p className="max-w-md text-sm text-slate-600 leading-relaxed sm:text-right">
                  {videosDescription}
                </p>
              </div>
              <StaticVideoGallery videos={videos} />
            </div>
          </section>
        )}

        {/* Stories Grid */}
        <section className="w-full bg-white py-16 pb-0 sm:py-24 sm:pb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {showFilter && (
              <BlogFilter division={division} basePath={pageBasePath} />
            )}
            {storiesTitle && (
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-300">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
                  {storiesTitle}
                </h2>
                <p className="max-w-md text-sm text-slate-600 leading-relaxed sm:text-right">
                  {storiesDescription}
                </p>
              </div>
            )}
            <Suspense fallback={<GridSkeleton />}>
              <div className="space-y-10">
                <StoriesGrid
                  page={page}
                  division={division}
                  detailBasePath={detailBasePath}
                  paginationBasePath={pageBasePath}
                  paginationDivision={showFilter ? division : null}
                />
              </div>
            </Suspense>
          </div>
        </section>

        <SuccessStoriesFooter division={chromeDivision} />
      </div>
    </AppShell>
  );
};

export { DIVISION_CATEGORY_SLUGS, POSTS_PER_PAGE };
