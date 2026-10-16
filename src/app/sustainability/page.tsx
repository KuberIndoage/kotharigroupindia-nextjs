import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { SolutionOverview } from '@/components/solutions/SolutionOverview';
import {
  SustainHero,
  SustainPillars,
  SustainByDesign,
  SustainTestimonials,
  SUSTAINABILITY_INTRO,
} from '@/components/solutions/SustainabilitySections';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { ORG_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Sustainability | Leading Pipe & Irrigation Manufacturer in India | Kothari Group',
  description:
    'Kothari Group, one of India\u2019s leading pipe and irrigation manufacturers, promotes sustainability through solar-powered manufacturing, water-conscious product design, and farmer-focused CSR initiatives.',
};

export const generateMetadata = wpPageMetadataFor('sustainability', SEO_FALLBACK);

export default async function SustainabilityPage() {
  const seo = await resolveSeoText('sustainability', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/sustainability',
          pageName: 'Sustainability',
          title: seo.title,
          description: seo.description,
          pageType: 'WebPage',
          aboutId: ORG_ID,
        })}
      />
      <AppShell>
        <div className="text-left">
          <Home2Header />
          <SustainHero />
          <SolutionOverview overview={[SUSTAINABILITY_INTRO]} />
          <SustainPillars />
          <SustainByDesign />
          {/* <SustainTestimonials /> */}
          <Home2Footer />
        </div>
      </AppShell>
    </>
  );
}
