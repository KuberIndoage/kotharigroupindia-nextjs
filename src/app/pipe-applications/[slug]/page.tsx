import { notFound } from 'next/navigation';
import AppShell from '@/components/AppShell';
import { HeaderDivison } from '@/components/HeaderDivision';
import { Footer } from '@/components/Footer';
import { ApplicationDetailPageTemplate } from '@/components/applications/ApplicationDetailPage';
import { getApplicationDetailBySlug, getApplicationDetailsByParent } from '@/data/applications';
import {
  PipefooterData,
  IrrigationfooterData,
} from '@/components/ProductPageLayout';
import {
  IrrigationproductsMegaMenu,
  irrigationSolutionsMegaMenu,
  PipeproductsMegaMenu,
  pipeSolutionsMegaMenu,
} from '@/data/products';

type Params = { slug: string };

const PARENT_HREF = '/pipe-applications';
const IS_PIPE = true;

export function generateStaticParams() {
  return getApplicationDetailsByParent(PARENT_HREF).map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }) {
  const { slug } = await Promise.resolve(params);
  const detail = getApplicationDetailBySlug(PARENT_HREF, slug);
  if (!detail) return { title: 'Application Not Found | Kothari Group' };
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
    },
  };
}

export default async function PipeApplicationDetailPage({ params }: { params: Params | Promise<Params> }) {
  const { slug } = await Promise.resolve(params);
  const detail = getApplicationDetailBySlug(PARENT_HREF, slug);
  if (!detail) notFound();

  return (
    <AppShell>
      <HeaderDivison
        productsMegaMenu={IS_PIPE ? PipeproductsMegaMenu : IrrigationproductsMegaMenu}
        solutionsMegaMenu={IS_PIPE ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu}
      />
      <ApplicationDetailPageTemplate detail={detail} />
      <Footer footerData={IS_PIPE ? PipefooterData : IrrigationfooterData} />
    </AppShell>
  );
}