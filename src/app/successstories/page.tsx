import { SuccessStoriesListing } from '@/components/successstories/SuccessStoriesListing';

export const revalidate = 600;

export const metadata = {
  title: 'Success Stories of Farmers & Dealers - Kothari Group',
  description:
    'Read inspiring success stories of farmers and dealers partnering with Kothari Group how smart irrigation, quality products &amp; service drove growth and results.',
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

  return (
    <SuccessStoriesListing
      page={page}
      division={division}
      showFilter
      title="Success Stories"
      subtitle="Real-world outcomes from Kothari Group piping and irrigation projects — farms transformed, water saved, communities strengthened."
    />
  );
}
