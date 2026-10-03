import React from 'react';
import { HeaderDivison } from '@/components/HeaderDivision';
import { Footer } from '@/components/Footer';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
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

export type SuccessStoriesDivision = 'pipe' | 'irrigation';

// Resolve the division from the page slug (e.g. "/pipe-successstories",
// "/irrigation-successstories"). Slugs without a division fall back to the
// active filter; the combined listing keeps the shared site chrome.
export function getSuccessStoriesDivision(
  pageSlug: string,
  fallback?: SuccessStoriesDivision | null
): SuccessStoriesDivision | null {
  const slug = pageSlug.split('?')[0].replace(/^\/+|\/+$/g, '');
  if (/irrigation/i.test(slug)) return 'irrigation';
  if (/pipe/i.test(slug)) return 'pipe';
  return fallback ?? null;
}

export const SuccessStoriesHeader: React.FC<{
  division: SuccessStoriesDivision | null;
  solid?: boolean;
}> = ({ division, solid = false }) => {
  if (!division) return <Home2Header solid={solid} />;

  return (
    <HeaderDivison
      productsMegaMenu={
        division === 'pipe' ? PipeproductsMegaMenu : IrrigationproductsMegaMenu
      }
      solutionsMegaMenu={
        division === 'pipe' ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu
      }
      solid={solid}
    />
  );
};

export const SuccessStoriesFooter: React.FC<{
  division: SuccessStoriesDivision | null;
}> = ({ division }) => {
  if (!division) return <Home2Footer />;

  return (
    <Footer footerData={division === 'pipe' ? PipefooterData : IrrigationfooterData} />
  );
};
