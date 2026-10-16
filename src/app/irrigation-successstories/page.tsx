import { SuccessStoriesListing } from '@/components/successstories/SuccessStoriesListing';
import {
  irrigationSuccessStoryPlaylistId,
  irrigationSuccessStoryVideos,
} from '@/data/success-story-videos';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { IRRIGATION_DIVISION_ID, standardPageGraph } from '@/lib/schema';

export const revalidate = 600;

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Irrigation Division Success Stories | Kothari Group India',
  description:
    'Read Kothari Group irrigation division success stories — drip, sprinkler and micro irrigation projects that saved water and improved yields.',
};

export const generateMetadata = wpPageMetadataFor('irrigation-successstories', SEO_FALLBACK);

export default async function IrrigationSuccessStoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1);
  const seo = await resolveSeoText('irrigation-successstories', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/irrigation-successstories',
          pageName: 'Irrigation Success Stories',
          title: seo.title,
          description: seo.description,
          pageType: 'CollectionPage',
          aboutId: IRRIGATION_DIVISION_ID,
        })}
      />
      <SuccessStoriesListing
        page={page}
        division="irrigation"
        title="Irrigation Success Stories"
        subtitle="Real project outcomes from Kothari Group irrigation division — drip, sprinkler and micro irrigation systems that save water and raise yields."
        detailBasePath="/irrigation-successstories"
        paginationBasePath="/irrigation-successstories"
        videos={irrigationSuccessStoryVideos}
        playlistId={irrigationSuccessStoryPlaylistId}
        storiesTitle="Latest Success Stories"
      />
    </>
  );
}
 