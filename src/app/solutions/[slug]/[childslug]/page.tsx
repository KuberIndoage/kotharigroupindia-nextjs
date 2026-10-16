import { notFound } from 'next/navigation';
import AppShell from '@/components/AppShell';
import { HeaderDivison } from '@/components/HeaderDivision';
import { Footer } from '@/components/Footer';
import { SolutionChildPageTemplate } from '@/components/solutions/SolutionChildPageTemplate';
import { solutionsData, getSolutionBySlug, getChildSolutionBySlug } from '@/data/solutions';
import {
  PipefooterData,
  IrrigationfooterData,
} from '@/components/ProductPageLayout';
import { IrrigationproductsMegaMenu, irrigationSolutionsMegaMenu, PipeproductsMegaMenu, pipeSolutionsMegaMenu } from '@/data/products';
import { JsonLd } from '@/components/JsonLd';
import {
  IRRIGATION_DIVISION_ID,
  PIPE_DIVISION_ID,
  childPageGraph,
} from '@/lib/schema';

type Params = { slug: string; childslug: string };

export function generateStaticParams() {
  return solutionsData.flatMap((s) =>
    (s.childSolutions?.items ?? []).map((c) => ({ slug: s.slug, childslug: c.slug }))
  );
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }) {
  const { slug, childslug } = await Promise.resolve(params);
  const solution = getSolutionBySlug(slug);
  const child = solution ? getChildSolutionBySlug(slug, childslug) : undefined;
  if (!solution || !child) return { title: 'Solution Not Found | Kothari Group' };
  return {
    title: child.metaTitle,
    description: child.metaDescription,
    openGraph: {
      title: child.metaTitle,
      description: child.metaDescription,
    },
  };
}

export default async function SolutionChildPage({ params }: { params: Params | Promise<Params> }) {
  const { slug, childslug } = await Promise.resolve(params);
  const solution = getSolutionBySlug(slug);
  const child = solution ? getChildSolutionBySlug(slug, childslug) : undefined;
  if (!solution || !child) notFound();

  const isPipe = solution.division === 'pipe';

  return (
    <>
      {/* Schema.txt Template 3: Home > {solution.h1} > {child.h1} */}
      <JsonLd
        data={childPageGraph({
          path: `/solutions/${slug}/${childslug}`,
          pageName: child.h1,
          title: child.metaTitle,
          description: child.metaDescription,
          parentName: solution.h1,
          parentPath: `/solutions/${slug}`,
          aboutId: isPipe ? PIPE_DIVISION_ID : IRRIGATION_DIVISION_ID,
        })}
      />
    <AppShell>
      <HeaderDivison
        productsMegaMenu={isPipe ? PipeproductsMegaMenu : IrrigationproductsMegaMenu}
        solutionsMegaMenu={isPipe ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu}
      />
      <SolutionChildPageTemplate solution={solution} child={child} theme={isPipe ? 'blue' : 'blue'} />
      <Footer footerData={isPipe ? PipefooterData : IrrigationfooterData} />
    </AppShell>
    </>
  );
}