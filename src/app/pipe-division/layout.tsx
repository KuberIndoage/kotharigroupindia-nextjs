import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { PIPE_DIVISION_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Pipe Division | PVC, UPVC & CPVC Pipes & Fittings | Kothari Group',
  description:
    'Explore the Kothari Group Pipe Division: PVC, UPVC, CPVC pipes and fittings for plumbing, drainage, borewell, agriculture and cable protection applications.',
};

export const generateMetadata = wpPageMetadataFor('pipe-division', SEO_FALLBACK);

// The division page itself is a client component, so its JSON-LD lives here in
// the server layout (Schema.txt Template 2: CollectionPage, about the Pipe
// Division entity).
export default async function PipeDivisionLayout({ children }: { children: React.ReactNode }) {
  const seo = await resolveSeoText('pipe-division', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/pipe-division',
          pageName: 'Pipe Division',
          title: seo.title,
          description: seo.description,
          pageType: 'CollectionPage',
          aboutId: PIPE_DIVISION_ID,
        })}
      />
      {children}
    </>
  );
}