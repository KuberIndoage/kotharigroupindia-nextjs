import {
  SuccessStoryDetail,
  successStoryDetailMetadata,
} from '@/components/successstories/SuccessStoryDetail';

export const revalidate = 600;

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return successStoryDetailMetadata(slug);
}

export default async function IrrigationSuccessStoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  return <SuccessStoryDetail slug={slug} backPath="/irrigation-successstories" />;
}
