'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import type { SolutionRelatedProduct } from '@/data/solutions';

export const SolutionRelatedProducts: React.FC<{ products: SolutionRelatedProduct[]; theme?: 'blue' | 'green' }> = ({ products, theme = 'blue' }) => {
  const isGreen = theme === 'green';
  const accentHoverBorder = isGreen ? 'hover:border-[#1E8E3E]' : 'hover:border-[#1575B3]';
  const accentGroupHoverText = isGreen ? 'group-hover:text-[#1E8E3E]' : 'group-hover:text-[#1575B3]';
  const accentHoverText = isGreen ? 'hover:text-[#1E8E3E]' : 'hover:text-[#1575B3]';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

  const maxIndex = Math.max(0, products.length - itemsPerPage);
  const safeIndex = Math.min(currentIndex, maxIndex);
  const itemWidth = 100 / itemsPerPage;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, products.length, currentIndex, maxIndex]);

  if (!products.length) return null;

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - itemsPerPage));
  const handleNext = () =>
    setCurrentIndex((i) => Math.min(maxIndex, i + itemsPerPage));

  return (
    <section id="related-products" className={`w-full ${isGreen ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} py-16 border-b ${isGreen ? 'border-[#1E8E3E]/15' : 'border-slate-300/70'} scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <SectionHeader
          title="Related Products"
          description="Complementary systems for seamless integration and lasting performance."
        />

        {/* Slider Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${safeIndex * itemWidth}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {products.map((rel) => (
              <div
                key={`${rel.categorySlug}-${rel.slug}`}
                style={{ width: `${itemWidth}%` }}
                className="shrink-0 px-4"
              >
                <Link
                  href={`/${rel.categorySlug}/${rel.slug}`}
                  className={`group relative bg-white border border-slate-200/90 flex flex-col h-full shadow-sm hover:shadow-xl ${accentHoverBorder} transition-all duration-500 overflow-hidden`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden  border-b border-slate-200">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-contain p-4 opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <h3 className={`text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight ${accentGroupHoverText} transition-colors duration-300 line-clamp-2`}>
                        {rel.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                        {rel.shortDescription}
                      </p>
                    </div>
                    <div className={`pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase ${accentGroupHoverText} transition-colors`}>
                      <span>View Product</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Prev / Next Arrows */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={safeIndex === 0}
              aria-label="Previous related products"
              className={`w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 ${accentHoverBorder} ${accentHoverText} transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={safeIndex >= maxIndex}
              aria-label="Next related products"
              className={`w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 ${accentHoverBorder} ${accentHoverText} transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
