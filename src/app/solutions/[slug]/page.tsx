import { notFound } from 'next/navigation';
import AppShell from '@/components/AppShell';
import { HeaderDivison } from '@/components/HeaderDivision';
import { Footer } from '@/components/Footer';
import { SolutionPageTemplate } from '@/components/solutions/SolutionPageTemplate';
import { solutionsData, getSolutionBySlug } from '@/data/solutions';
import {
  PipefooterData,
  IrrigationfooterData,

} from '@/components/ProductPageLayout';
import { IrrigationproductsMegaMenu, irrigationSolutionsMegaMenu, PipeproductsMegaMenu, pipeSolutionsMegaMenu } from '@/data/products';
import { JsonLd } from '@/components/JsonLd';
import {
  IRRIGATION_DIVISION_ID,
  PIPE_DIVISION_ID,
  standardPageGraph,
} from '@/lib/schema';

type Params = { slug: string };

export function generateStaticParams() {
  return solutionsData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }) {
  const { slug } = await Promise.resolve(params);
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: 'Solution Not Found | Kothari Group' };
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
    },
  };
}

export default async function SolutionPage({ params }: { params: Params | Promise<Params> }) {
  const { slug } = await Promise.resolve(params);
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const isPipe = solution.division === 'pipe';

  return (
    <>
      {/* Schema.txt Template 2: solution pages are WebPages about their division. */}
      <JsonLd
        data={standardPageGraph({
          path: `/solutions/${slug}`,
          pageName: solution.h1,
          title: solution.metaTitle,
          description: solution.metaDescription,
          pageType: 'WebPage',
          aboutId: isPipe ? PIPE_DIVISION_ID : IRRIGATION_DIVISION_ID,
        })}
      />
    <AppShell>
      <HeaderDivison
        
        productsMegaMenu={isPipe ? PipeproductsMegaMenu : IrrigationproductsMegaMenu}
        solutionsMegaMenu={isPipe ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu}
      />
      <SolutionPageTemplate solution={solution} theme={isPipe ? 'blue' : 'blue'} />
      <Footer footerData={isPipe ? PipefooterData : IrrigationfooterData} />
    </AppShell>
    </>
  );
}
