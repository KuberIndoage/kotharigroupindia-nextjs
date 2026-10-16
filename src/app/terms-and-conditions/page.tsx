import { Mail } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { termsData } from '@/lib/term';
import { wpPageMetadataFor } from '@/lib/wp-seo';

export const generateMetadata = wpPageMetadataFor('terms-and-conditions', {
  title: 'Terms & Conditions | Kothari Group',
  description:
    'Read the Kothari Group Terms & Conditions covering usage, licenses, payments, restrictions and liability for our website and services.',
});

export default function TermsConditionsPage() {
  const { title, updatedDate, contents, sections } = termsData;

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[40dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/4968557/pexels-photo-4968557.jpeg"
              alt="Terms & Conditions"
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
                Updated at: {updatedDate}
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
                  {contents.map((item, i) => (
                    <li key={item}>
                      <a
                        href={`#section-${i + 1}`}
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
                Agreement & Usage Terms
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                By using the Kothari Group website, you agree to the terms set out below. Please read
                them carefully before placing an order or using our services.
              </p>

              {/* Mobile contents */}
              {/* <div className="mt-10 lg:hidden">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#0E588A] font-semibold">
                  Contents
                </span>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {contents.map((item, i) => (
                    <li key={item}>
                      <a
                        href={`#section-${i + 1}`}
                        className="inline-block text-xs border border-slate-200 px-3 py-1.5 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3] transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Sections */}
              <div className="mt-12 space-y-0 border-t border-slate-200">
                {sections.map((section, i) => (
                  <section
                    key={section.title}
                    id={`section-${i + 1}`}
                    className="py-8 border-b border-slate-200 scroll-mt-28"
                  >
                    <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-900">
                      <span className="text-[#1575B3]">{i + 1}.</span> {section.title}
                    </h3>

                    {section.paragraphs && (
                      <div className="mt-4 space-y-3">
                        {section.paragraphs.map((p) => (
                          <p key={p.slice(0, 20)} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.definitions && (
                      <dl className="mt-4 divide-y divide-slate-100 border border-slate-200">
                        {section.definitions.map((def) => (
                          <div key={def.term} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-3 px-4">
                            <dt className="sm:col-span-3 text-sm font-semibold text-slate-900">{def.term}</dt>
                            <dd className="sm:col-span-9 text-sm text-slate-600 leading-relaxed">{def.description}</dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                            <span className="mt-2.5 w-1.5 h-1.5 bg-[#1575B3] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contactEmail && (
                      <div className="mt-4 flex items-center gap-2 text-sm sm:text-base text-slate-600">
                        <Mail className="w-4 h-4 text-[#1575B3] shrink-0" />
                        <span className="font-medium text-slate-900">{section.contactEmail}</span>
                      </div>
                    )}
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