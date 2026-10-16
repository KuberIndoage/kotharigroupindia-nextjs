import { MapPin, Phone } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { policyData } from '@/lib/policy';
import { wpPageMetadataFor } from '@/lib/wp-seo';

export const generateMetadata = wpPageMetadataFor('privacy-policy', {
  title: 'Privacy Policy | Kothari Group',
  description:
    'Read the Kothari Group Privacy Policy to understand what information we collect, how we use it, and how it may be disclosed to third parties.',
});

export default function PrivacyPolicyPage() {
  const { title, effectiveDate, introHeadline, introParagraphs, address, contents, sections } =
    policyData;

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[40dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/4973899/pexels-photo-4973899.jpeg"
              alt="Privacy Policy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full min-h-[40dvh] pt-28 sm:pt-32 pb-10 flex flex-col justify-between">
            <div className="flex flex-col gap-5 sm:gap-6 my-auto py-8">
              <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                Kothari Group
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
                {title}
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed drop-shadow-sm">
                Effective Date: {effectiveDate}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <div>
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#0E588A] font-semibold">
                  Contents
                </span>
                <ul className="mt-4 border-l border-slate-200">
                  {contents.map((item) => (
                    <li key={item}>
                      <a
                        href={`#section-${item.split('.')[0]}`}
                        className="block text-sm text-slate-600 hover:text-[#1575B3] py-1.5 pl-4 -ml-px border-l-2 border-transparent hover:border-[#1575B3] transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-9 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-light tracking-tight text-slate-900 uppercase m-0">
                {introHeadline}
              </h2>

              <div className="mt-6 bg-[#F5FAFF] border border-[#DCEAF5] p-6 sm:p-7">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#0E588A] font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Kothari Group is located at:
                </span>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  {address.map((line, i) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {introParagraphs.map((p) => (
                  <p key={p.slice(0, 20)} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <Phone className="w-4 h-4 text-[#1575B3]" />
                <span>
                  For any questions, you may reach us at the phone number listed in the address
                  above.
                </span>
              </div>

              {/* Sections */}
              {/* <div className="mt-12 lg:hidden">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#0E588A] font-semibold">
                  Contents
                </span>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {contents.map((item) => (
                    <li key={item}>
                      <a
                        href={`#section-${item.split('.')[0]}`}
                        className="inline-block text-xs border border-slate-200 px-3 py-1.5 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3] transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}

              <div className="mt-12 space-y-0 border-t border-slate-200">
                {sections.map((section) => (
                  <section
                    key={section.number}
                    id={`section-${section.number}`}
                    className="py-8 border-b border-slate-200 scroll-mt-28"
                  >
                    <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-900">
                      <span className="text-[#1575B3]">{section.number}.</span> {section.title}
                    </h3>
                    <div className="mt-4 space-y-3">
                      {section.paragraphs.map((p) => (
                        <p key={p.slice(0, 20)} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}