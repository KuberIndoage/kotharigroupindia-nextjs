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
import { wpPageMetadataFor } from '@/lib/wp-seo';

export const generateMetadata = wpPageMetadataFor('sustainability', {
  title: 'Sustainability | Leading Pipe & Irrigation Manufacturer in India | Kothari Group',
  description:
    'Kothari Group, one of India\u2019s leading pipe and irrigation manufacturers, promotes sustainability through solar-powered manufacturing, water-conscious product design, and farmer-focused CSR initiatives.',
});

export default function SustainabilityPage() {
  return (
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
  );
}
