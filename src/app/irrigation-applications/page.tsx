import { DivisionApplicationsPage } from '@/components/applications/ApplicationsPage';
import { irrigationApplications } from '@/data/applications';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { IRRIGATION_DIVISION_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Irrigation Applications | Drip, Sprinkler & Micro Irrigation | Kothari Group India',
  description:
    'Explore Kothari Group irrigation applications — drip irrigation, sprinklers, micro irrigation, filtration and fertigation for every crop and field.',
};

export const generateMetadata = wpPageMetadataFor('irrigation-applications', SEO_FALLBACK);

export default async function IrrigationApplicationsPage() {
  const seo = await resolveSeoText('irrigation-applications', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/irrigation-applications',
          pageName: 'Irrigation Applications',
          title: seo.title,
          description: seo.description,
          pageType: 'WebPage',
          aboutId: IRRIGATION_DIVISION_ID,
        })}
      />
      <DivisionApplicationsPage data={irrigationApplications} isPipe={false} />
    </>
  );
}
