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
import { wpPageMetadataFor } from '@/lib/wp-seo';
import { awardsData } from '@/lib/awards';

export const generateMetadata = wpPageMetadataFor('about-us', {
  title: 'About Us | Kothari Group — Nurturing Lands, Building Dreams',
  description:
    'For over four decades, Kothari Group, an ISO-9001:2015 company, has empowered Indian farmers and builders with innovative irrigation and piping solutions.',
});

export default function AboutPage() {
const { awards, categories } = awardsData;

  return (
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
  );
}
