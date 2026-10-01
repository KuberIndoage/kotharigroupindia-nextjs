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
    <AppShell>
      <HeaderDivison
        productsMegaMenu={isPipe ? PipeproductsMegaMenu : IrrigationproductsMegaMenu}
        solutionsMegaMenu={isPipe ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu}
      />
      <SolutionChildPageTemplate solution={solution} child={child} theme={isPipe ? 'blue' : 'green'} />
      <Footer footerData={isPipe ? PipefooterData : IrrigationfooterData} />
    </AppShell>
  );
}