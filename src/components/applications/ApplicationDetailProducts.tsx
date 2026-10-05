'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ApplicationDetail } from '@/data/applications';
import {
  ApplicationDetailSection,
  ApplicationSectionHeading,
} from './ApplicationDetailSection';

export const ApplicationDetailProducts: React.FC<{
  products: ApplicationDetail['products'];
  isPipe: boolean;
}> = ({ products, isPipe }) => {
  const isGreen = !isPipe;
  const accentHoverBorder = isGreen ? 'hover:border-[#1E8E3E]' : 'hover:border-[#1575B3]';
  const accentGroupHoverText = isGreen ? 'group-hover:text-[#1E8E3E]' : 'group-hover:text-[#1575B3]';
  const accentHoverText = isGreen ? 'hover:text-[#1E8E3E]' : 'hover:text-[#1575B3]';
  const accentText = isGreen ? 'text-[#1E8E3E]' : 'text-[#1575B3]';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.items.length - itemsPerPage);
  const safeIndex = Math.min(currentIndex, maxIndex);
  const itemWidth = 100 / itemsPerPage;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, products.items.length, currentIndex, maxIndex]);

  const headBg = isPipe ? 'bg-[#061E33]' : 'bg-[#0B3D20]';
  const rowBorder = isPipe ? 'border-slate-200' : 'border-[#1E8E3E]/15';

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - itemsPerPage));
  const handleNext = () =>
    setCurrentIndex((i) => Math.min(maxIndex, i + itemsPerPage));

  return (
    <ApplicationDetailSection tinted isPipe={isPipe}>
      <ApplicationSectionHeading title={products.heading} intro={products.intro} />

      {/* Slider Track */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${safeIndex * itemWidth}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {products.items.map((product) => {
            const isExpanded = expanded === product.url;
            return (
              <div
                key={product.url}
                style={{ width: `${itemWidth}%` }}
                className="shrink-0 px-4"
              >
                <div
                  className={`group relative bg-white border border-slate-200/90 flex flex-col h-full shadow-sm hover:shadow-xl ${accentHoverBorder} transition-all duration-500 overflow-hidden`}
                >
                  <Link
                    href={product.url}
                    className="relative block aspect-[16/10] overflow-hidden border-b border-slate-200"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-contain p-4 opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </Link>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <h3
                        className={`text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight ${accentGroupHoverText} transition-colors duration-300 line-clamp-2 m-0`}
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-600 font-normal leading-relaxed m-0">
                        <span className={isExpanded ? '' : 'line-clamp-3'}>
                          {product.paragraphs[0]}
                        </span>
                        {isExpanded &&
                          product.paragraphs.slice(1).map((paragraph, idx) => (
                            <span key={idx} className="block mt-3">
                              {paragraph}
                            </span>
                          ))}
                      </p>

                      <button
                        type="button"
                        onClick={() => setExpanded(isExpanded ? null : product.url)}
                        aria-expanded={isExpanded}
                        className={`inline-flex items-center gap-1.5 p-0 bg-transparent border-0 cursor-pointer text-[10px] font-mono font-semibold tracking-[0.25em] uppercase ${accentText} hover:opacity-70 transition-opacity`}
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <Link
                      href={product.url}
                      className={`pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase ${accentGroupHoverText} transition-colors`}
                    >
                      <span>View Product</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Prev / Next Arrows */}
      {maxIndex > 0 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={handlePrev}
            disabled={safeIndex === 0}
            aria-label="Previous products"
            className={`w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 ${accentHoverBorder} ${accentHoverText} transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={safeIndex >= maxIndex}
            aria-label="Next products"
            className={`w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 ${accentHoverBorder} ${accentHoverText} transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Application-to-Product Mapping */}
      <div className="mt-16">
        {products.mapping.heading && (
          <h3 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-tight text-slate-900 m-0">
            {products.mapping.heading}
          </h3>
        )}

        <div className="overflow-x-auto mt-6 border border-slate-200">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className={`${headBg} text-white`}>
                {products.mapping.columnHeadings.map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className="px-5 sm:px-6 py-4 text-[11px] font-mono tracking-[0.2em] uppercase font-normal"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.mapping.rows.map((row, idx) => (
                <tr
                  key={`${row.requirement}-${row.product}-${idx}`}
                  className={`bg-white border-b last:border-b-0 ${rowBorder}`}
                >
                  <td className="px-5 sm:px-6 py-4 text-sm text-slate-700 font-normal align-top">
                    {row.requirement}
                  </td>
                  <td className="px-5 sm:px-6 py-4 text-sm text-slate-900 font-medium align-top">
                    {row.product}
                  </td>
                  <td className="px-5 sm:px-6 py-4 text-sm text-slate-600 font-normal align-top">
                    {row.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ApplicationDetailSection>
  );
};