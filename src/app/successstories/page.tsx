import { SuccessStoriesListing } from '@/components/successstories/SuccessStoriesListing';
import { resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { ORG_ID, standardPageGraph } from '@/lib/schema';

export const revalidate = 600;

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift.
const SEO_FALLBACK = {
  title: 'Success Stories of Farmers & Dealers - Kothari Group',
  description:
    'Read inspiring success stories of farmers and dealers partnering with Kothari Group how smart irrigation, quality products & service drove growth and results.',
};

export const metadata = {
  title: SEO_FALLBACK.title,
  description: SEO_FALLBACK.description,
};

type DivisionFilter = 'pipe' | 'irrigation' | null;

export default async function SuccessStoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; division?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1);
  const division: DivisionFilter =
    params.division === 'pipe' || params.division === 'irrigation'
      ? params.division
      : null;
  const seo = await resolveSeoText(undefined, SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/successstories',
          pageName: 'Success Stories',
          title: seo.title,
          description: seo.description,
          pageType: 'CollectionPage',
          aboutId: ORG_ID,
        })}
      />
      <SuccessStoriesListing
        page={page}
        division={division}
        showFilter
        title="Success Stories"
        subtitle="Real-world outcomes from Kothari Group piping and irrigation projects — farms transformed, water saved, communities strengthened."
      />
    </>
  );
}
