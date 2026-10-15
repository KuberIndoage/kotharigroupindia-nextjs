'use client';

import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { Reveal } from '@/components/main/Reveal';
import { SectionHeader } from '@/components/solutions/SectionHeader';

const QUALITY_IMAGE = 'https://kotharigroupindia.com/img/images/quality-policy.webp';

export const QualityDocument: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Quality Document"
          description="Represents the standards that Kothari Group’s manufacturing process and product performance are based on. "
        />
        <Reveal>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            aria-label="View Quality Policy document"
            className="group relative block w-full max-w-3xl mx-auto border border-slate-200 bg-white p-3 sm:p-4 hover:border-[#1575B3] hover:shadow-[0_14px_34px_-12px_rgba(21,117,179,0.25)] transition-all duration-300 cursor-pointer"
          >
            <img
              src={QUALITY_IMAGE}
              alt="Quality Policy"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-2 bg-white/90 border border-slate-200 text-[#1575B3] text-xs font-mono font-semibold tracking-wider uppercase opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <ZoomIn className="w-4 h-4" />
              Click to view
            </span>
          </button>
        </Reveal>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setModalOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-zoom-out"
          />
          <div className="relative w-full max-w-3xl bg-white shadow-2xl fade-in">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 bg-white/95 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-[#1575B3] hover:text-white transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={QUALITY_IMAGE}
              alt="Quality Policy document"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};