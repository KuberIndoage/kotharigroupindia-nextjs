'use client';

import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/main/Reveal';
import { ApplyModal } from '@/components/career/ApplyModal';
import type { JobPosting } from '@/lib/career';

interface CareersGalleryProps {
  jobs: JobPosting[];
  locations: string[];
}

export const CareersGallery: React.FC<CareersGalleryProps> = ({ jobs, locations }) => {
  const [activeLocation, setActiveLocation] = useState('All');
  const [applyFor, setApplyFor] = useState<string | null>(null);

  const filtered =
    activeLocation === 'All'
      ? jobs
      : jobs.filter((job) => job.location === activeLocation);

  const handleLocation = (loc: string) => {
    setActiveLocation(loc);
  };

  return (
    <div>
      {/* Filter by location heading + tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-300">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
          Current Openings
        </h2>
        {/* <div className="flex flex-wrap gap-2">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocation(loc)}
              className={`px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase border transition-all duration-200 ${
                activeLocation === loc
                  ? 'bg-[#1575B3] border-[#1575B3] text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
              }`}
            >
              {loc}
            </button>
          ))}
        </div> */}
      </div>

      {/* Jobs List */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-3">
          {filtered.map((job, i) => (
            <Reveal key={job.id} delay={(i % 4) * 60}>
              <div className="group bg-white border border-slate-200 px-5 sm:px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-lg hover:border-[#1575B3] transition-all duration-300">
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-serif font-medium text-slate-900 leading-snug group-hover:text-[#1575B3] transition-colors duration-300">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[11px] font-mono tracking-widest uppercase text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#1575B3]" />
                      {job.place}
                    </span>
                    <span>{job.department}</span>
                    <span>{job.date}</span>
                  </div>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed mt-3">
                    {job.description}
                  </p>
                </div>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    setApplyFor(job.title);
                  }}
                  className="shrink-0 inline-flex items-center gap-2 justify-center bg-[#1575B3] text-white text-xs font-mono font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#0E588A] transition-colors duration-300"
                >
                  Apply Now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-sm text-slate-500">No jobs found for this location.</p>
        </div>
      )}

      {applyFor && <ApplyModal jobTitle={applyFor} onClose={() => setApplyFor(null)} />}
    </div>
  );
};