import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { IRRIGATION_DIVISION_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Irrigation Division | Drip, Sprinkler & Micro Irrigation | Kothari Group',
  description:
    'Explore the Kothari Group Irrigation Division: drip and micro irrigation systems, sprinklers, filters, fertigation and automation for water-efficient farming.',
};

export const generateMetadata = wpPageMetadataFor('irrigation-division', SEO_FALLBACK);

// The division page itself is a client component, so its JSON-LD lives here in
// the server layout (Schema.txt Template 2: CollectionPage, about the
// Irrigation Division entity).
export default async function IrrigationDivisionLayout({ children }: { children: React.ReactNode }) {
  const seo = await resolveSeoText('irrigation-division', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/irrigation-division',
          pageName: 'Irrigation Division',
          title: seo.title,
          description: seo.description,
          pageType: 'CollectionPage',
          aboutId: IRRIGATION_DIVISION_ID,
        })}
      />
      {children}
    </>
  );
}