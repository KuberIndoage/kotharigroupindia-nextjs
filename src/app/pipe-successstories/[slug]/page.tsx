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

export default async function PipeSuccessStoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  return <SuccessStoryDetail slug={slug} backPath="/pipe-successstories" />;
}
