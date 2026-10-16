import DivisionProductsPage from '@/components/products/DivisionProductsPage';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { IRRIGATION_DIVISION_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Irrigation Products | Micro Irrigation Systems | Kothari Group',
  description:
    'Browse the complete Kothari Group irrigation division catalogue — drip irrigation systems, sprinklers, filters, injectors, automation and turnkey projects.',
};

export const generateMetadata = wpPageMetadataFor('irrigation-products', SEO_FALLBACK);

export default async function IrrigationProductsPage() {
  const seo = await resolveSeoText('irrigation-products', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/irrigation-products',
          pageName: 'Irrigation Products',
          title: seo.title,
          description: seo.description,
          pageType: 'CollectionPage',
          aboutId: IRRIGATION_DIVISION_ID,
        })}
      />
      <DivisionProductsPage
        divisionSlug="irrigation-division"
        eyebrow="Irrigation Division"
        title="Irrigation Products"
        description="Explore our complete irrigation division catalogue — engineered for performance and reliability."
      />
    </>
  );
}