import { SuccessStoriesListing } from '@/components/successstories/SuccessStoriesListing';
import { irrigationSuccessStoryPlaylistId, irrigationSuccessStoryVideos, pipeSuccessStoryPlaylistId, pipeSuccessStoryVideos } from '@/data/success-story-videos';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { PIPE_DIVISION_ID, standardPageGraph } from '@/lib/schema';

export const revalidate = 600;

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Pipe Division Success Stories | Kothari Group India',
  description:
    'Read Kothari Group pipe division success stories — plumbing, drainage and agri piping projects delivered with dependable quality and on-site support.',
};

export const generateMetadata = wpPageMetadataFor('pipe-successstories', SEO_FALLBACK);

export default async function PipeSuccessStoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1);
  const seo = await resolveSeoText('pipe-successstories', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/pipe-successstories',
          pageName: 'Pipe Success Stories',
          title: seo.title,
          description: seo.description,
          pageType: 'CollectionPage',
          aboutId: PIPE_DIVISION_ID,
        })}
      />
      <SuccessStoriesListing
        page={page}
        division="pipe"
        title="Pipe Success Stories"
        subtitle="Real project outcomes from Kothari Group pipe division — plumbing, drainage and agri piping installations built to last."
        detailBasePath="/pipe-successstories"
        paginationBasePath="/pipe-successstories"
        videos={pipeSuccessStoryVideos}
        playlistId={pipeSuccessStoryPlaylistId}
        storiesTitle="Latest Success Stories"
      />
    </>
  );
}
