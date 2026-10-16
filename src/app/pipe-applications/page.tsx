import { DivisionApplicationsPage } from '@/components/applications/ApplicationsPage';
import { pipeApplications } from '@/data/applications';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { PIPE_DIVISION_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Pipe Applications | Plumbing, Drainage & Borewell | Kothari Group India',
  description:
    'Explore Kothari Group pipe applications — residential and commercial plumbing, municipal drainage and sewerage, borewell extraction and agri piping systems.',
};

export const generateMetadata = wpPageMetadataFor('pipe-applications', SEO_FALLBACK);

export default async function PipeApplicationsPage() {
  const seo = await resolveSeoText('pipe-applications', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/pipe-applications',
          pageName: 'Pipe Applications',
          title: seo.title,
          description: seo.description,
          pageType: 'WebPage',
          aboutId: PIPE_DIVISION_ID,
        })}
      />
      <DivisionApplicationsPage data={pipeApplications} isPipe />
    </>
  );
}
