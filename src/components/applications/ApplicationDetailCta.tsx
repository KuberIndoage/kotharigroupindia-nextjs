import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ApplicationDetail } from '@/data/applications';

export const ApplicationDetailCta: React.FC<{ cta: ApplicationDetail['cta']; isPipe: boolean }> = ({
  cta,
  isPipe,
}) => {
  return (
    <section
      // className={`w-full ${isPipe ? 'bg-[#061E33]' : 'bg-[#0B3D20]'} py-16 sm:py-24 text-white`}
       className={`w-full ${isPipe ? 'bg-[#061E33]' : 'bg-[#061E33]'} py-16 sm:py-24 text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-white m-0 leading-tight">
            {cta.heading}
          </h2>
        </div>
        <div className="flex flex-col lg:items-end gap-6">
          <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-xl lg:text-right">
            {cta.body}
          </p>
          <Link
            href="/contact-us"
            className={`inline-flex items-center justify-center gap-2 ${
              // isPipe ? 'bg-[#1575B3] hover:bg-[#0E588A]' : 'bg-[#1E8E3E] hover:bg-[#145E2A]'
                  isPipe ? 'bg-[#1575B3] hover:bg-[#0E588A]' : 'bg-[#1575B3] hover:bg-[#0E588A]'
            } text-white px-7 py-3.5 text-sm font-medium transition-all duration-300 group`}
          >
            {cta.buttonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};