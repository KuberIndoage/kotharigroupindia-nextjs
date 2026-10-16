import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { BoardHero, BoardDirectors, BoardYoungLeadership } from '@/components/about/BoardSections';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { ORG_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Our Board | Kothari Group — Leadership & Vision',
  description:
    'Meet the Board of Directors and young leadership team guiding Kothari Group — strong roots leading to a visionary future in water management.',
};

export const generateMetadata = wpPageMetadataFor('our-management', SEO_FALLBACK);

export default async function OurBoardPage() {
  const seo = await resolveSeoText('our-management', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/our-management',
          pageName: 'Our Board',
          title: seo.title,
          description: seo.description,
          pageType: 'WebPage',
          aboutId: ORG_ID,
        })}
      />
      <AppShell>
      <div className="text-left">
        <Home2Header />
        <BoardHero />
        <BoardDirectors />
        <BoardYoungLeadership />
        <Home2Footer />
      </div>
    </AppShell>
    </>
  );
}
