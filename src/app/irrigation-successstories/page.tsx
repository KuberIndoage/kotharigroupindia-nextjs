import { SuccessStoriesListing } from '@/components/successstories/SuccessStoriesListing';
import {
  irrigationSuccessStoryPlaylistId,
  irrigationSuccessStoryVideos,
} from '@/data/success-story-videos';
import { wpPageMetadataFor } from '@/lib/wp-seo';

export const revalidate = 600;

export const generateMetadata = wpPageMetadataFor('irrigation-successstories', {
  title: 'Irrigation Division Success Stories | Kothari Group India',
  description:
    'Read Kothari Group irrigation division success stories — drip, sprinkler and micro irrigation projects that saved water and improved yields.',
});

export default async function IrrigationSuccessStoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1);

  return (
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
  );
}
