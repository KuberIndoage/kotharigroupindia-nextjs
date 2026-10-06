'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { SolutionApplication } from '@/data/solutions';

const APP_IMAGES = [
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
];

const APP_TAGLINES = [
  'Proven performance in demanding field conditions.',
  'Built for season-after-season reliability.',
  'Engineered for uniform, efficient coverage.',
  'Trusted across Indian farms and projects.',
  'Optimized for water saving and better yield.',
  'Designed for easy installation at any scale.',
];

const normalizeApplications = (apps: SolutionApplication[]) =>
  apps.map((app) =>
    typeof app === 'string'
      ? { title: app.trim(), description: '' }
      : { title: (app.title || '').trim(), description: (app.description || '').trim() }
  );

export const SolutionApplications: React.FC<{ applications: SolutionApplication[]; theme?: 'blue' | 'green' }> = ({ applications, theme = 'blue' }) => {
  const isGreen = theme === 'green';
  const [active, setActive] = useState(0);
  const items = normalizeApplications(applications);
  if (!items.length) return null;

  const accentText = isGreen ? 'text-emerald-200' : 'text-cyan-200';
  const mutedText = isGreen ? 'text-green-100/70' : 'text-blue-100/70';
  const activeIndex = Math.min(active, items.length - 1);
  const activeItem = items[activeIndex];
  const activeTagline = APP_TAGLINES[activeIndex % APP_TAGLINES.length];

  return (
    <section className={`${isGreen ? 'bg-[#145E2A]' : 'bg-[#015CAA]'} py-24 relative overflow-hidden`}>
      {/* Background Decorative Elements */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${isGreen ? 'from-emerald-300/10' : 'from-cyan-400/10'} to-transparent blur-3xl pointer-events-none`} />
      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr ${isGreen ? 'from-green-950/40' : 'from-blue-900/40'} to-transparent blur-3xl pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14 relative z-10">

        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-white">
              Applications
            </h2>
          </div>

          <p className={`text-xs sm:text-sm ${isGreen ? 'text-green-100/80' : 'text-blue-100/80'} max-w-md font-light leading-relaxed`}>
            Where this solution delivers measurable efficiency and lifecycle value.
          </p>
        </div>

        {/* Image (left) + Titles (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left: Big preview image (stretches to match right column height) */}
          <div className={`relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden border border-white/15 shadow-2xl ${isGreen ? 'bg-[#0E4A20]/40' : 'bg-[#014d8f]/40'}`}>
            {items.map((item, idx) => (
              <img
                key={`${item.title}-${idx}`}
                src={APP_IMAGES[idx % APP_IMAGES.length]}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  idx === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            <div className={`absolute inset-0 bg-gradient-to-t ${isGreen ? 'from-[#0E4A20]/70' : 'from-[#014d8f]/70'} via-transparent to-transparent pointer-events-none`} />

            {/* Caption over image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2">
              <h3 className={`text-xl sm:text-2xl font-serif font-light uppercase tracking-tight text-white leading-snug`}>
                {activeItem.title}
              </h3>
              <p className={`text-sm ${mutedText} font-light leading-relaxed max-w-lg`}>
                {activeTagline}
              </p>
            </div>

            {/* Accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${isGreen ? 'from-emerald-300' : 'from-cyan-400'} via-transparent to-transparent`} />
          </div>

          {/* Right: Title list */}
          <ul className="list-none p-0 m-0 border-t border-white/15">
            {items.map((item, idx) => {
              const isActive = idx === activeIndex;
              const subtitle =
                item.description || APP_TAGLINES[idx % APP_TAGLINES.length];
              return (
                <li key={`${item.title}-${idx}`} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    onMouseEnter={() => setActive(idx)}
                    onFocus={() => setActive(idx)}
                    aria-label={`Show ${item.title} preview`}
                    className="w-full text-left px-1 py-5 group focus:outline-none"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <span className={`block font-mono text-[11px] tracking-[0.2em] ${isActive ? accentText : mutedText} transition-colors duration-300`}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`mt-1.5 text-lg sm:text-xl font-serif font-light uppercase tracking-tight text-white ${isActive ? accentText : ''} transition-colors duration-300`}>
                          {item.title}
                        </h3>

                        {/* Description / tagline below the hovered title */}
                        <div className={`grid transition-all duration-500 ease-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                          <div className="overflow-hidden">
                            <p className={`text-sm ${mutedText} font-light leading-relaxed pr-6`}>
                              {subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* <span
                        className={`shrink-0 w-9 h-9 mt-1 flex items-center justify-center border transition-all duration-300 ${
                          isActive
                            ? `border-white/40 ${isGreen ? 'bg-emerald-300/20 text-emerald-200' : 'bg-cyan-400/20 text-cyan-200'}`
                            : 'border-white/15 text-white/50 group-hover:border-white/40 group-hover:text-white'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </span> */}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
};
