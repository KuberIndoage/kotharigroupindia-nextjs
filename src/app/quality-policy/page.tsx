import React from 'react';
import {
  BadgeCheck,
  Lightbulb,
  Leaf,
  ShieldCheck,
  Users,
  PackageCheck,
  Recycle,
  Cpu,
  MessageSquare,
  HardHat,
} from 'lucide-react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { Reveal } from '@/components/main/Reveal';
import { SectionHeader } from '@/components/solutions/SectionHeader';
import { QualityDocument } from '@/components/quality-policy/QualityDocument';
import { wpPageMetadataFor } from '@/lib/wp-seo';

export const generateMetadata = wpPageMetadataFor('quality-policy', {
  title: 'Quality Policy | Kothari Group',
  description:
    'Discover the Kothari Group\u2019s commitment to quality \u2014 our standards for materials, manufacturing, inspection and service in irrigation and agricultural solutions.',
});

const HERO_STATS = [
  { value: '35+', label: 'Years of Excellence' },
  { value: '7500+', label: 'Channel Partners' },
  { value: 'ISO 9001', label: 'Certified Quality' },
];

const PRINCIPLES = [
  {
    title: 'Quality Assurance',
    description: 'Ensuring high quality of pipes, fittings and irrigation systems.',
    icon: BadgeCheck,
  },
  {
    title: 'Technological Innovation',
    description: 'Improving production processes with the help of modern technologies.',
    icon: Lightbulb,
  },
  {
    title: 'Sustainability',
    description: 'Minimizing waste through smart sourcing and effective production.',
    icon: Leaf,
  },
  {
    title: 'Risk Management',
    description: 'Finding quality issues in advance.',
    icon: ShieldCheck,
  },
  {
    title: 'Staff Development',
    description: 'Enhancing employee competencies through continuous training and knowledge transfer. ',
    icon: Users,
  },
];

const OBJECTIVES = [
  {
    text: 'Avoid Defects: Take steps to get rid of quality defects through compliance with inspections and consistent monitoring.',
    icon: ShieldCheck,
  },
  {
    text: 'Enhance Supplier Quality: Collaborate with suppliers to maintain high-quality products.',
    icon: PackageCheck,
  },
  {
    text: 'Decrease Waste of Resources: Our goal is to achieve 10% annual decrease in waste of raw materials, water, and energy.',
    icon: Recycle,
  },
  {
    text: 'Enhance Quality Monitoring: Implement automation in the operations and make use of IoT technologies wherever possible.',
    icon: Cpu,
  },
  {
    text: 'Use Customers’ Opinions: Regularly gather customer feedback and make changes based on it.',
    icon: MessageSquare,
  },
  {
    text: 'Ensure Safety and Compliance: Follow safety rules and comply with legal requirements. ',
    icon: HardHat,
  },
];

export default function QualityPolicyPage() {
  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        <div className="relative w-full min-h-[40dvh] sm:min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/plant_quality_lab_1784719742717.jpg"
              alt="Quality Policy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full min-h-[40dvh] sm:min-h-[100dvh] pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between">
            <div className="w-full flex flex-col gap-5 sm:gap-6 my-auto py-8">
              <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                Kothari Group
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
                Quality Policy
              </h1>
              {/* <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Our commitment to excellence in every material, process and product.
              </p> */}
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full border-t border-white/20 pt-6 mt-auto max-w-2xl">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OVERVIEW */}
        <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
            <SectionHeader
              title="Overview"
              description="Introduction to Who We Are and What Our Quality Commitment is All About."
            />
            <Reveal>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-7xl">
               At Kothari Group, quality has always played an integral role in the manufacturing process of pipes, fittings and irrigation products. For many years we have been working on supplying products that can be relied upon to meet customer expectations and manage water properly in agriculture, plumbing or infrastructure.
              </p> 
            </Reveal> 
            <Reveal delay={90}>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-7xl">
      Through the Quality Policy we ensure that every step of production, from choosing suitable materials to manufacturing and service is in accordance with quality standards. Continuous improvement and responsible attitude to work is our key to constantly providing excellent and reliable products to our customers. 
              </p>
            </Reveal>
          </div>
        </section>

        {/* KEY PRINCIPLES — ledger rows */}
        <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
            <SectionHeader
              title="Our Key Principles"
              description="Here are five commitments we follow in our quality management approach."
            />
            <div className="flex flex-col divide-y divide-slate-200 border-y border-slate-200 bg-white">
              {PRINCIPLES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative flex items-center gap-4 sm:gap-8 px-5 sm:px-8 py-6 sm:py-7 hover:bg-[#F5F6F8] transition-colors"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-[3px] bg-[#1575B3] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"
                    />
                    <span className="w-10 shrink-0 font-mono text-sm text-[#1575B3]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-12 shrink-0 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] group-hover:shadow-[0_10px_20px_-8px_rgba(21,117,179,0.6)] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#1575B3] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-slate-900 leading-snug">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 font-normal leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* QUALITY OBJECTIVES — 3-col card grid */}
        <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
            <SectionHeader
              title="Quality Objectives"
              description="Here are six key points that help keep our quality objectives on course."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {OBJECTIVES.map((objective, i) => {
                const Icon = objective.icon;
                return (
                  <Reveal key={i} delay={(i % 3) * 90} className="h-full">
                    <div className="group relative h-full bg-white border border-slate-200 p-6 sm:p-7 overflow-hidden hover:border-[#1575B3] hover:shadow-[0_14px_34px_-12px_rgba(21,117,179,0.25)] transition-all duration-300">
                      <span
                        aria-hidden
                        className="absolute left-0 top-0 h-full w-[3px] bg-[#1575B3] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"
                      />
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-10 h-10 bg-[#1575B3]/10 border border-[#1575B3]/30 flex items-center justify-center text-[#1575B3] transition-colors duration-300 group-hover:bg-[#1575B3] group-hover:text-white">
                          <Icon className="w-5 h-5" />
                        </span>
                        {/* <span className="font-mono text-xs text-slate-300 group-hover:text-[#1575B3] transition-colors duration-300">
                          {String(i + 1).padStart(2, '0')}
                        </span> */}
                      </div>
                      <p className="text-sm text-slate-600 font-normal leading-relaxed">{objective.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <QualityDocument />

        <Home2Footer />
      </div>
    </AppShell>
  );
}