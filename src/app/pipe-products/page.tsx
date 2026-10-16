import DivisionProductsPage from '@/components/products/DivisionProductsPage';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { PIPE_DIVISION_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Pipe Products | Pipes, Fittings & Plumbing | Kothari Group',
  description:
    'Browse the complete Kothari Group pipe division catalogue — plumbing pipes and fittings, agricultural pipes, sewerage and drainage systems, borewell solutions and more.',
};

export const generateMetadata = wpPageMetadataFor('pipe-products', SEO_FALLBACK);

export default async function PipeProductsPage() {
  const seo = await resolveSeoText('pipe-products', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/pipe-products',
          pageName: 'Pipe Products',
          title: seo.title,
          description: seo.description,
          pageType: 'CollectionPage',
          aboutId: PIPE_DIVISION_ID,
        })}
      />
      <DivisionProductsPage
        divisionSlug="pipe-division"
        eyebrow="Pipe Division"
        title="Pipe Products"
        description="Explore our complete pipe division catalogue — engineered for performance and reliability."
      />
    </>
  );
}