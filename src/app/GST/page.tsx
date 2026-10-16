import React from 'react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { SectionHeader } from '@/components/solutions/SectionHeader';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { ORG_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'GST Information for Kothari Group | Kothari Group',
  description:
    'View GST-related information for Kothari Group’s irrigation and agricultural solutions — tax registration details, compliance practices and invoice guidelines.',
};

export const generateMetadata = wpPageMetadataFor('gst', SEO_FALLBACK);

const GST_ENTRIES = [
  { no: 1, gstin: '37AADCK8017H2ZG', status: 'Active', state: 'Andhra Pradesh' },
  { no: 2, gstin: '10AADCK8017H2ZW', status: 'Active', state: 'Bihar' },
  { no: 3, gstin: '22AADCK8017H1ZS', status: 'Active', state: 'Chhattisgarh' },
  { no: 4, gstin: '24AADCK8017H2ZN', status: 'Active', state: 'Gujarat' },
  { no: 5, gstin: '06AADCK8017H1ZM', status: 'Active', state: 'Haryana' },
  { no: 6, gstin: '02AADCK8017H1ZU', status: 'Active', state: 'Himachal Pradesh' },
  { no: 7, gstin: '29AADCK8017H1ZE', status: 'Active', state: 'Karnataka' },
  { no: 8, gstin: '23AADCK8017H1ZQ', status: 'Active', state: 'Madhya Pradesh' },
  { no: 9, gstin: '27AADCK8017H1ZI', status: 'Active', state: 'Maharashtra' },
  { no: 10, gstin: '21AADCK8017H1ZU', status: 'Active', state: 'Odisha' },
  { no: 11, gstin: '03AADCK8017H1ZS', status: 'Active', state: 'Punjab' },
  { no: 12, gstin: '08AADCK8017H1ZI', status: 'Active', state: 'Rajasthan' },
  { no: 13, gstin: '33AADCK8017H1ZP', status: 'Active', state: 'Tamil Nadu' },
  { no: 14, gstin: '36AADCK8017H1ZJ', status: 'Active', state: 'Telangana' },
  { no: 15, gstin: '09AADCK8017H1ZG', status: 'Active', state: 'Uttar Pradesh' },
  { no: 16, gstin: '27AADCK8017H3ZG', status: 'Active', state: 'ISD' },
];

export default async function GSTPage() {
  const seo = await resolveSeoText('gst', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/GST',
          pageName: 'GST Details',
          title: seo.title,
          description: seo.description,
          pageType: 'WebPage',
          aboutId: ORG_ID,
        })}
      />
      <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/heronew.jpg"
              alt="GST Details"
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
                GST Details
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Tax registration details and compliance information for Kothari Agritech Private Limited.
              </p>
            </div>
          </div>
        </div>

        {/* COMPANY DETAILS */}
        <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
            <SectionHeader
              title="Registration Details"
              description="PAN and state-wise GST registrations for Kothari Agritech Private Limited."
            />
            <div className="bg-[#F5F6F8] border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight">
                  KOTHARI AGRITECH PRIVATE LIMITED
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
                  PAN : <span className="font-semibold text-slate-800">AADCK8017H</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GSTIN TABLE */}
        <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
            <SectionHeader
              title="State-wise GSTIN"
              description="All GSTINs are active registrations under Kothari Agritech Private Limited."
            />
            <div className="overflow-x-auto bg-white border border-slate-200 shadow-sm">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#0E588A] text-white">
                    <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">Sr. No.</th>
                    <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">GSTIN/UIN</th>
                    <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">GSTIN/UIN Status</th>
                    <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">State</th>
                  </tr>
                </thead>
                <tbody>
                  {GST_ENTRIES.map((entry, i) => (
                    <tr
                      key={entry.gstin}
                      className={`border-t border-slate-200 transition-colors hover:bg-[#F0F7FC] ${
                        i % 2 === 1 ? 'bg-[#FAFBFC]' : 'bg-white'
                      }`}
                    >
                      <td className="px-5 py-3.5 text-sm text-slate-600">{entry.no}</td>
                      <td className="px-5 py-3.5 text-sm font-mono font-medium text-slate-900">
                        {entry.gstin}
                      </td>
                      <td className="px-5 py-3.5 text-sm">
                        <span className="inline-flex items-center gap-1.5 text-[#1E8E3E]">
                          <span className="w-2 h-2 rounded-full bg-[#1E8E3E]" />
                          {entry.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-slate-700">{entry.state}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
    </>
  );
}