// src/lib/wp-seo.ts
import { cache } from 'react';
import type { Metadata } from 'next';

const WP_API =
  process.env.NEXT_PUBLIC_WP_API_URL || 'https://admin.kotharigroupindia.com/wp-json';

// Rebuild SEO metadata from WP every N seconds (ISR). Lower = fresher Yoast
// edits (adjustable in one place); higher = better caching.
const SEO_REVALIDATE_SECONDS = 600;

export interface WpSeoData {
  title: string;
  description: string;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ');
}

// Fetches the Yoast `yoast_head_json` for a WP page by slug. Returns null on
// any failure so pages always fall back to their static metadata (build never
// breaks if the WP API is slow or down). Uses ISR revalidation so Yoast edits
// made in WordPress admin appear within 10 minutes without a redeploy, while
// pages still serve from cache between refreshes.
// Wrapped in React `cache()` so generateMetadata and the page body (which both
// need the resolved title/description for JSON-LD) share a single request.
export const fetchWpSeoBySlug = cache(
  async (slug: string): Promise<WpSeoData | null> => {
    try {
      const res = await fetch(
        `${WP_API}/wp/v2/pages?slug=${encodeURIComponent(slug)}&_fields=yoast_head_json`,
        {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          next: { revalidate: SEO_REVALIDATE_SECONDS },
        }
      );
      if (!res.ok) return null;
      const data = await res.json();
      const seo = Array.isArray(data) && data[0] ? data[0].yoast_head_json : null;
      if (!seo) return null;
      const title = decodeEntities(String(seo.title ?? '')).trim();
      const description = decodeEntities(String(seo.description ?? '')).trim();
      if (!title && !description) return null;
      return { title, description };
    } catch (error) {
      console.error(`[wp-seo] fetch failed for "${slug}":`, error);
      return null;
    }
  }
);

function overlayWpSeo(seo: WpSeoData | null, fallback: Metadata): Metadata {
  if (!seo) return fallback;
  return {
    ...fallback,
    title: seo.title || fallback.title,
    description: seo.description || fallback.description,
    openGraph: {
      ...(fallback.openGraph || {}),
      title: seo.title || undefined,
      description: seo.description || undefined,
    },
  };
}

export async function wpPageMetadata(slug: string, fallback: Metadata): Promise<Metadata> {
  const seo = await fetchWpSeoBySlug(slug);
  return overlayWpSeo(seo, fallback);
}

// Convenience factory so pages can do:
//   export const generateMetadata = wpPageMetadataFor('about-us', { title: '...', description: '...' });
export function wpPageMetadataFor(slug: string, fallback: Metadata): () => Promise<Metadata> {
  return () => wpPageMetadata(slug, fallback);
}

export interface SeoText {
  title: string;
  description: string;
}

/**
 * Resolves the same title/description a page's `generateMetadata` will serve, as
 * plain strings. JSON-LD requires {{PAGE_TITLE}} and {{META_DESCRIPTION}} to
 * match the page's own title tag and meta description (Schema.txt section 3.3),
 * so pages reuse this instead of restating their fallback strings.
 *
 * Mirrors `overlayWpSeo`: Yoast wins when non-empty, otherwise the static
 * fallback is used.
 */
export async function resolveSeoText(
  slug: string | undefined,
  fallback: SeoText
): Promise<SeoText> {
  if (!slug) return fallback;
  const seo = await fetchWpSeoBySlug(slug);
  return {
    title: seo?.title || fallback.title,
    description: seo?.description || fallback.description,
  };
}