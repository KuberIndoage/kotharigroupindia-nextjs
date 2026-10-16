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
import { JsonLd } from '@/components/JsonLd';
import { IRRIGATION_DIVISION_ID, childPageGraph } from '@/lib/schema';

type Params = { slug: string };

const PARENT_HREF = '/irrigation-applications';
const IS_PIPE = false;

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

export default async function IrrigationApplicationDetailPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { slug } = await Promise.resolve(params);
  const detail = getApplicationDetailBySlug(PARENT_HREF, slug);
  if (!detail) notFound();

  return (
    <>
      {/* Schema.txt Template 3: Home > {detail.parentLabel} > {detail.h1} */}
      <JsonLd
        data={childPageGraph({
          path: `${detail.parentHref}/${slug}`,
          pageName: detail.h1,
          title: detail.metaTitle,
          description: detail.metaDescription,
          parentName: detail.parentLabel,
          parentPath: detail.parentHref,
          aboutId: IRRIGATION_DIVISION_ID,
        })}
      />
    <AppShell>
      <HeaderDivison
        productsMegaMenu={IS_PIPE ? PipeproductsMegaMenu : IrrigationproductsMegaMenu}
        solutionsMegaMenu={IS_PIPE ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu}
      />
      <ApplicationDetailPageTemplate detail={detail} />
      <Footer footerData={IS_PIPE ? PipefooterData : IrrigationfooterData} />
    </AppShell>
    </>
  );
}