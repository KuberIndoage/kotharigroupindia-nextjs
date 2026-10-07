// src/lib/wp-posts.ts
import { cache } from 'react';

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL || 'https://admin.kotharigroupindia.com/wp-json';

export interface WpBlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorAvatar: string | null;
  category: string;
  categorySlug: string;
  featuredImage: string | null;
  readMinutes: number;
  content?: string;
}

export interface WpBlogList {
  posts: WpBlogPost[];
  total: number;
  totalPages: number;
}

// Fetch with a timeout so a slow WP backend never hangs navigation.
// Retries once on abort/timeout so a transient slow response never crashes the server.
async function fetchWithTimeout(
  url: string,
  init?: RequestInit,
  ms = 20000,
  attempts = 2
): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    const controller = new AbortController();
    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) controller.abort();
    }, ms);
    try {
      const res = await fetch(url, { ...init, signal: controller.signal });
      settled = true;
      return res;
    } catch (error) {
      settled = true;
      lastError = error;
      if (attempt === attempts) break;
      await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
}

// Strip HTML and normalize whitespace to plain text.
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;|&#8220;|&#8221;/g, '"')
    .replace(/&#039;|&#8217;/g, "'")
    .replace(/&#8230;|&hellip;/g, '…')
    .replace(/\s+/g, ' ')
    .trim();
}

// Format ISO date as e.g. "12 March 2026".
function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Estimate reading time from word count.
function estimateReadMinutes(content: string): number {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// ACF "Author Image" raw value → attachment ID when it is an ID / image array.
function rawAuthorImageValue(raw: any): unknown {
  return raw?.acf?.author_image ?? raw?._embedded?.author?.[0]?.acf?.author_image ?? null;
}

function authorImageIdOf(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (value && typeof value === 'object') {
    const id = (value as any).ID;
    if (typeof id === 'number' && Number.isFinite(id)) return id;
  }
  return null;
}

// Batch-resolve attachment IDs → image URL (one /media request per page of posts).
async function fetchAuthorImageUrls(
  raws: any[],
  opts?: { fresh?: boolean }
): Promise<Map<number, string>> {
  const ids = [
    ...new Set(
      raws
        .map((raw) => authorImageIdOf(rawAuthorImageValue(raw)))
        .filter((id): id is number => id !== null)
    ),
  ];
  if (!ids.length) return new Map();
  try {
    const res = await fetchWithTimeout(
      `${WP_API}/wp/v2/media?include=${ids.join(',')}&per_page=${ids.length}&_fields=id,source_url,sizes${wpFreshParam(opts)}`,
      wpFetchInit(opts)
    );
    if (!res.ok) return new Map();
    const data = await res.json();
    if (!Array.isArray(data)) return new Map();
    return new Map<number, string>(
      data.map((m: any) => [
        Number(m.id),
        m.sizes?.medium_large || m.sizes?.medium || m.source_url,
      ])
    );
  } catch {
    return new Map();
  }
}

function mapPost(raw: any, mediaById?: Map<number, string>): WpBlogPost {
  const embed = raw._embedded || {};
  const media = embed['wp:featuredmedia'];
  const term = embed['wp:term'];
  const categoryTerm = term?.[0]?.find((t: any) => t.taxonomy === 'category');
  const category = categoryTerm?.name ?? 'Kothari Group';
  const categorySlug = (categoryTerm?.slug ?? '').toLowerCase();
  const author =
    raw.acf?.author_name ??
    embed?.author?.[0]?.name ??
    'Kothari Group';
  const authorAvatar = embed?.author?.[0]?.avatar_urls?.['96'] ?? null;
  const rawAuthorImage = rawAuthorImageValue(raw);
  // Accepts URL string (legacy), image array (ACF return format) or attachment ID (REST).
  const authorImageOverride =
    typeof rawAuthorImage === 'string'
      ? rawAuthorImage
      : rawAuthorImage && typeof rawAuthorImage === 'object'
        ? (rawAuthorImage as any).url ?? (rawAuthorImage as any).sizes?.medium_large ?? null
        : authorImageIdOf(rawAuthorImage) !== null
          ? mediaById?.get(authorImageIdOf(rawAuthorImage) as number) ?? null
          : null;
  const content = raw.content?.rendered ?? '';
  return {
    id: raw.id,
    slug: raw.slug,
    title: stripHtml(raw.title?.rendered ?? ''),
    excerpt: stripHtml(raw.excerpt?.rendered ?? ''),
    date: formatDate(raw.date ?? ''),
    author,
    authorAvatar: authorImageOverride || authorAvatar,
    category,
    categorySlug,
    featuredImage: media?.[0]?.source_url ?? null,
    readMinutes: estimateReadMinutes(content),
    content,
  };
}

// Fetch a page of blog posts from WordPress with pagination headers.
// Optional categoryId filters to a single category (e.g. blogs vs success stories).
// Returns an empty result on failure instead of throwing — keeps the server alive.
export const fetchWpBlogPosts = cache(async (page = 1, perPage = 9, categoryId?: number): Promise<WpBlogList> => {
  const categoryQuery = categoryId ? `&categories=${categoryId}` : '';
  const url = `${WP_API}/wp/v2/posts?page=${page}&per_page=${perPage}&_embed${categoryQuery}`;
  try {
    const res = await fetchWithTimeout(url, {
      next: { revalidate: 600 },
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!res.ok) return { posts: [], total: 0, totalPages: 0 };
    const total = Number(res.headers.get('x-wp-total') || '0');
    const totalPages = Number(res.headers.get('x-wp-totalpages') || res.headers.get('x-wp-total-pages') || '1');
    const data = await res.json();
    const list = Array.isArray(data) ? data : [];
    const mediaById = await fetchAuthorImageUrls(list);
    const posts = list.map((p: any) => mapPost(p, mediaById));
    return { posts, total, totalPages };
  } catch {
    console.error('[wp-posts] Failed to fetch blog posts:', url);
    return { posts: [], total: 0, totalPages: 0 };
  }
});

// WordPress category IDs used for the news/blog/content mix.
export const WP_CATEGORIES = {
  blogs: 1,
  successStory: 180,
} as const;

// News tabs served on /press-release — resolved by slug so no hardcoded IDs are needed.
export const NEWS_CATEGORY_SLUGS = ['events', 'announcements', 'updates'] as const;

export const NEWS_CATEGORY_LABELS: Record<string, string> = {
  events: 'Events',
  announcements: 'Announcements',
  updates: 'Updates',
};

// Shared fetch options — ISR-friendly by default (Data Cache 600s) so SSG/ISR
// pages stay fast; `fresh` bypasses every cache layer so live endpoints always
// reflect the latest WordPress content.
type WpFetchOptions = { fresh?: boolean };

function wpFetchInit(opts?: WpFetchOptions): RequestInit {
  return opts?.fresh
    ? { cache: 'no-store', headers: { 'User-Agent': 'Mozilla/5.0' } }
    : { next: { revalidate: 600 }, headers: { 'User-Agent': 'Mozilla/5.0' } };
}

// Cache-busting query param (fresh only) so CDN-cached WP REST responses are skipped too.
function wpFreshParam(opts?: WpFetchOptions): string {
  return opts?.fresh ? `&cb=${Date.now()}` : '';
}

// Resolve WP category slugs → numeric IDs via /wp/v2/categories.
// Returns only the IDs that exist — fail-soft so the page falls back to static data.
async function fetchWpCategoryIdsImpl(
  slugs: readonly string[] | string[],
  opts?: WpFetchOptions
): Promise<number[]> {
  if (!slugs.length) return [];
  const url = `${WP_API}/wp/v2/categories?slug=${slugs.map((s) => encodeURIComponent(s)).join(',')}&per_page=100&_fields=id,slug${wpFreshParam(opts)}`;
  try {
    const res = await fetchWithTimeout(url, wpFetchInit(opts));
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    // Preserve the requested slug order.
    const bySlug = new Map(data.map((c: any) => [String(c.slug).toLowerCase(), Number(c.id)]));
    return slugs
      .map((s) => bySlug.get(s.toLowerCase()))
      .filter((id): id is number => Number.isFinite(id));
  } catch {
    console.error('[wp-posts] Failed to fetch categories:', url);
    return [];
  }
}

export const fetchWpCategoryIds = cache(
  (slugs: readonly string[] | string[]): Promise<number[]> => fetchWpCategoryIdsImpl(slugs)
);

// Fetch news posts across the Events / Announcements / Updates categories.
// Returns a flat, date-desc list (each post carries its category name + slug).
// Returns [] on failure — callers fall back to static news data.
export const fetchWpNewsPosts = cache(async (perCategory = 100): Promise<WpBlogPost[]> => {
  return fetchWpPostsByCategorySlugs(NEWS_CATEGORY_SLUGS, perCategory);
});

// Fetch recent posts across a set of category slugs, merged date-desc.
// Returns [] on failure — callers fall back to static data.
async function fetchWpPostsByCategorySlugsImpl(
  slugs: readonly string[] | string[],
  perCategory = 3,
  opts?: WpFetchOptions
): Promise<WpBlogPost[]> {
  const ids = opts?.fresh ? await fetchWpCategoryIdsImpl(slugs, opts) : await fetchWpCategoryIds(slugs);
  if (!ids.length) return [];
  try {
    const settled = await Promise.allSettled(
      ids.map((id) =>
        fetchWithTimeout(
          `${WP_API}/wp/v2/posts?categories=${id}&per_page=${perCategory}&orderby=date&order=desc&_embed${wpFreshParam(opts)}`,
          wpFetchInit(opts)
        ).then(async (res) => {
          if (!res.ok) return [] as any[];
          const data = await res.json();
          return Array.isArray(data) ? data : [];
        })
      )
    );
    const raws = settled.flatMap((r) => (r.status === 'fulfilled' ? r.value : []));
    const mediaById = await fetchAuthorImageUrls(raws, opts);
    const posts = raws.map((raw) => mapPost(raw, mediaById));
    return posts.sort((a, b) => b.id - a.id);
  } catch {
    console.error('[wp-posts] Failed to fetch posts by category slugs:', slugs.join(','));
    return [];
  }
}

export const fetchWpPostsByCategorySlugs = cache(
  (slugs: readonly string[] | string[], perCategory = 3): Promise<WpBlogPost[]> =>
    fetchWpPostsByCategorySlugsImpl(slugs, perCategory)
);

// Uncached variant for live endpoints (division-news) so WordPress edits
// (category changes, posts added/removed) show immediately.
export const fetchWpPostsByCategorySlugsFresh = (
  slugs: readonly string[] | string[],
  perCategory = 3
): Promise<WpBlogPost[]> => fetchWpPostsByCategorySlugsImpl(slugs, perCategory, { fresh: true });

// Fetch a single post by slug (full content included).
// Returns null on failure instead of throwing.
export const fetchWpBlogPostBySlug = cache(async (slug: string): Promise<WpBlogPost | null> => {
  const url = `${WP_API}/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`;
  try {
    const res = await fetchWithTimeout(url, {
      next: { revalidate: 600 },
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const post = Array.isArray(data) && data.length ? data[0] : null;
    if (!post) return null;
    const mediaById = await fetchAuthorImageUrls([post]);
    return mapPost(post, mediaById);
  } catch {
    console.error('[wp-posts] Failed to fetch post by slug:', slug);
    return null;
  }
});

const DIVISION_CARD_FALLBACK_IMAGE =
  'https://kotharigroupindia.com/img/images/Irrigation_products.webp';

// Map live WordPress posts to division/home news cards
// ({ key, title, snippet, date, readTime, category, image, href }).
// Server-safe: lives in lib so server components can call it.
export function mapWpPostsToDivisionCards(
  posts: WpBlogPost[],
  basePath: '/press-release' | '/blogs'
): import('@/components/NewsDivision').DivisionNewsCard[] {
  return posts.map((post) => ({
    key: `wp-${basePath.replace('/', '')}-${post.id}`,
    title: post.title,
    snippet: post.excerpt,
    date: post.date,
    readTime: `${post.readMinutes} MIN READ`,
    category: post.category,
    image: post.featuredImage || DIVISION_CARD_FALLBACK_IMAGE,
    href: `${basePath}/${post.slug}`,
  }));
}

// Latest posts for the home page: 3 from the blogs category + 3 from events.
// Fail-soft — each list is independently empty on failure so static fallbacks show.
export const fetchWpHomeNews = cache(
  async (): Promise<{ blogs: WpBlogPost[]; events: WpBlogPost[] }> => {
    const empty = { blogs: [] as WpBlogPost[], events: [] as WpBlogPost[] };
    try {
      const [blogsRes, eventIds] = await Promise.all([
        fetchWpBlogPosts(1, 100, WP_CATEGORIES.blogs).catch(() => null),
        fetchWpCategoryIds(['events']).catch(() => [] as number[]),
      ]);
      const blogs = blogsRes?.posts ?? [];
      let events: WpBlogPost[] = [];
      if (eventIds.length) {
        const eventsRes = await fetchWpBlogPosts(1, 3, eventIds[0]).catch(
          () => null
        );
        events = eventsRes?.posts ?? [];
      }
      return { blogs, events };
    } catch {
      console.error('[wp-posts] Failed to fetch home news');
      return empty;
    }
  }
);