import React from 'react';
import { ArrowRight, Package, BadgePercent, SlidersHorizontal, ShieldCheck, GraduationCap, Headset, ClipboardList, SearchCheck, Users } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { DealerApplyButton } from '@/components/dealer/DealerApplyModal';
import { dealerData } from '@/lib/dealer';
import { wpPageMetadataFor } from '@/lib/wp-seo';

export const generateMetadata = wpPageMetadataFor('become-dealer', {
  title: 'Become a Dealer with Kothari Group | Kothari Group',
  description:
    'Join Kothari Group as a dealer and tap into exclusive product ranges, support services and growth opportunities in the irrigation & agriculture sector.',
});

const benefitIcons = [Package, BadgePercent, SlidersHorizontal, ShieldCheck, GraduationCap, Headset];

const stepMeta = [
  { label: 'Step 01', title: 'Submit Application', icon: ClipboardList },
  { label: 'Step 02', title: 'Review & Approval', icon: SearchCheck },
  { label: 'Step 03', title: 'Onboarding & Training', icon: Users },
];

export default async function BecomeDealerPage() {
  const { steps, benefits, applyLink } = dealerData;

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/9870223/pexels-photo-9870223.jpeg"
              alt="Become a dealer"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full min-h-[50dvh] pt-28 sm:pt-32 pb-10 flex flex-col justify-between">
            <div className="flex flex-col gap-5 sm:gap-6 my-auto py-8">
              <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                Kothari Group
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
                Become Dealer
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Brief overview of the process and benefits.
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300 mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
                How it works
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
                A simple three-step process to become a Kothari dealer.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-stretch">
              {/* Left box */}
              <div className="lg:col-span-2 relative overflow-hidden bg-[#061E33] text-white p-10 sm:p-12 flex flex-col justify-between shadow-2xl shadow-[#061E33]/20 min-h-full h-full">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/heronew.jpg"
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-[#061E33]/85 pointer-events-none" />
                  <div className="absolute inset-0 bg-[#1575B3]/20 mix-blend-multiply pointer-events-none" />
                </div>
                {/* <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#061E33]/40 pointer-events-none" /> */}
                <div className="relative z-10 flex flex-col gap-6">
                  <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 px-3 py-1.5">
                    Become a Dealer
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif font-light tracking-tight leading-tight m-0">
                    Ready to partner with Kothari Group?
                  </h3>
                  <p className="text-sm text-white/75 font-normal leading-relaxed max-w-sm">
                    A simple three-step process to get started. Submit your application,
                    get it reviewed, and complete onboarding & training — then begin
                    serving customers with our products.
                  </p>
                </div>
                <div className="relative z-10 mt-10">
                  <DealerApplyButton applyLink={applyLink} />
                </div>
              </div>

              {/* Right cards */}
              <div className="lg:col-span-3 flex flex-col gap-5 justify-center min-h-full h-full">
                {steps.map((step, i) => {
                  const meta = stepMeta[i];
                  const Icon = meta.icon;
                  return (
                    <div
                      key={step.number}
                      className="group relative flex items-center gap-5 sm:gap-6 bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500"
                    >
                      {/* <span className="hidden sm:block text-6xl font-serif font-light text-[#1575B3]/15 leading-none select-none">
                        {String(step.number).padStart(2, '0')}.
                      </span> */}
                      <div className="w-16 h-16 shrink-0 bg-[#F5FAFF] border border-[#DCEAF5] flex items-center justify-center text-[#1575B3] group-hover:bg-[#1575B3] group-hover:text-white transition-colors duration-500">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#0E588A] font-semibold">
                          Step {String(step.number).padStart(2, '0')}
                        </span>
                        <h4 className="mt-1 text-lg sm:text-xl font-serif font-medium text-slate-900 leading-snug group-hover:text-[#1575B3] transition-colors duration-300">
                          {meta.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#1575B3] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full bg-[#F5F6F8] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300 mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
                Dealer Benefits
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
                Being a dealer with us offers partnership, innovation, and profit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefitIcons[i % benefitIcons.length];
                return (
                  <div
                    key={benefit.title}
                    className="group bg-white border border-slate-200 p-7 flex flex-col gap-5 shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-[#F5FAFF] border border-[#DCEAF5] flex items-center justify-center text-[#1575B3] group-hover:bg-[#1575B3] group-hover:text-white transition-colors duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-medium text-slate-900 leading-snug group-hover:text-[#1575B3] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-normal leading-relaxed mt-2">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}