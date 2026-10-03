import { SuccessStoriesListing } from '@/components/successstories/SuccessStoriesListing';
import { wpPageMetadataFor } from '@/lib/wp-seo';

export const revalidate = 600;

export const generateMetadata = wpPageMetadataFor('pipe-successstories', {
  title: 'Pipe Division Success Stories | Kothari Group India',
  description:
    'Read Kothari Group pipe division success stories — plumbing, drainage and agri piping projects delivered with dependable quality and on-site support.',
});

export default async function PipeSuccessStoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1);

  return (
    <SuccessStoriesListing
      page={page}
      division="pipe"
      title="Pipe Success Stories"
      subtitle="Real project outcomes from Kothari Group pipe division — plumbing, drainage and agri piping installations built to last."
      detailBasePath="/pipe-successstories"
      paginationBasePath="/pipe-successstories"
      storiesTitle="Latest Success Stories"
    />
  );
}
