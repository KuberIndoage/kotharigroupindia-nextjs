import { NextRequest, NextResponse } from 'next/server';
import {
  fetchWpPostsByCategorySlugsFresh,
  mapWpPostsToDivisionCards,
} from '@/lib/wp-posts';

export const dynamic = 'force-dynamic';

// Category slugs per division theme:
//   green (irrigation) → mirco-irrigation-system + agri-pipes-fittings
//   blue  (pipe)       → plumbing-pipes-fittings
const BLOG_CATEGORY_SLUGS: Record<string, string[]> = {
  green: ['mirco-irrigation-system'],
  blue: ['agri-pipes-fittings', 'plumbing-pipes-fittings'],
};

// Live division news + blogs for client pages (division homepages).
// Fail-soft: empty lists let the static fallbacks show.
export async function GET(request: NextRequest) {
  const theme = request.nextUrl.searchParams.get('theme') === 'green' ? 'green' : 'blue';
  try {
    const [blogPosts, eventPosts] = await Promise.all([
      fetchWpPostsByCategorySlugsFresh(BLOG_CATEGORY_SLUGS[theme], 100),
      fetchWpPostsByCategorySlugsFresh(['events'], 3),
    ]);
    return NextResponse.json({
      blogs: mapWpPostsToDivisionCards(blogPosts, '/blogs'),
      events: mapWpPostsToDivisionCards(eventPosts, '/press-release'),
    });
  } catch {
    return NextResponse.json({ blogs: [], events: [] });
  }
}