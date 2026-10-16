import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import {
  AboutHero,
  AboutGrowth,
  AboutVisionMission,
  AboutApproach,
  AboutCoreValues,
  AboutLegacy,
  AboutWhyKothari,
  AboutVisionMission2,
  AboutWhy,
} from '@/components/about/AboutSections';
import { Awards, ManufacturingUnits } from '@/components/about/ManufacturingUnits';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { awardsData } from '@/lib/awards';
import { JsonLd } from '@/components/JsonLd';
import { ORG_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'About Us | Kothari Group — Nurturing Lands, Building Dreams',
  description:
    'For over four decades, Kothari Group, an ISO-9001:2015 company, has empowered Indian farmers and builders with innovative irrigation and piping solutions.',
};

export const generateMetadata = wpPageMetadataFor('about-us', SEO_FALLBACK);

export default async function AboutPage() {
const { awards, categories } = awardsData;
const seo = await resolveSeoText('about-us', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/about-us',
          pageName: 'About Us',
          title: seo.title,
          description: seo.description,
          pageType: 'AboutPage',
          aboutId: ORG_ID,
        })}
      />
    <AppShell>
      <div className="text-left">
        <Home2Header />
        <AboutHero />
  <AboutGrowth />

  <AboutWhy />
          {/* <AboutWhyKothari /> */}
           <AboutLegacy />
            <ManufacturingUnits />
      
        <AboutVisionMission />

         <AboutVisionMission2 />
        {/* <AboutApproach /> */}
       
       <Awards awards={awards}/>
       
        {/* <AboutCoreValues /> */}
      
        <Home2Footer />
      </div>
    </AppShell>
    </>
  );
}
