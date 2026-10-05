'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ApplicationItem } from '@/data/applications';
import { getApplicationDetailHref } from '@/data/applications';

function ApplicationCard({
  item,
  theme = 'blue',
  basePath,
}: {
  item: ApplicationItem;
  theme?: 'blue' | 'green';
  basePath?: string;
}) {
  const isGreen = theme === 'green';
  const detailHref = basePath ? getApplicationDetailHref(basePath, item) : undefined;
  return (
    <div className={`group relative h-full flex flex-col ${isGreen ? 'bg-[#F2FAF4]' : 'bg-white'} border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden`}>
      {/* Image */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden border-b border-slate-200">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-tight text-slate-900 m-0 leading-snug">
          {detailHref ? (
            <Link href={detailHref} className="inline-flex items-start gap-2 hover:opacity-70 transition-opacity">
              <span>{item.title}</span>
              <ArrowUpRight className="w-5 h-5 mt-1 shrink-0" />
            </Link>
          ) : (
            item.title
          )}
        </h3>
        <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-4 mb-6">
          {item.description}
        </p>

        <div className="mt-auto pt-5 border-t border-slate-200">
          <span className="block text-[10px] font-mono tracking-[0.25em] uppercase text-slate-500 mb-3">
            Related Products
          </span>
          <div className="flex flex-wrap gap-2">
            {item.products.map((product) => (
              <Link
                key={product.name}
                href={product.url}
                className={`inline-flex items-center gap-1.5 border ${isGreen ? 'border-[#1E8E3E]/25 bg-[#EFF7F0] text-[#1E8E3E] hover:bg-[#1E8E3E]' : 'border-[#1575B3]/25 bg-[#F0F7FC] text-[#1575B3] hover:bg-[#1575B3]'} hover:text-white px-3 py-1.5 text-xs font-medium transition-all duration-200`}
              >
                {product.name}
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ApplicationCard };

interface ApplicationSliderProps {
  items: ApplicationItem[];
  theme?: 'blue' | 'green';
  basePath?: string;
}

export const ApplicationSlider: React.FC<ApplicationSliderProps> = ({
  items,
  theme = 'blue',
  basePath,
}) => {
  const isGreen = theme === 'green';
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const safePage = currentPage % totalPages;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handlePanEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 40;
    const velocityThreshold = 200;
    if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -velocityThreshold
    ) {
      handleNext();
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > velocityThreshold
    ) {
      handlePrev();
    }
  };

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, totalPages, handleNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: '0%',
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const visibleItems = items.slice(
    safePage * itemsPerPage,
    safePage * itemsPerPage + itemsPerPage,
  );

  return (
    <div>
      {/* Slides */}
      <div className="relative min-h-[420px] w-full py-6 px-1 touch-pan-y overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={safePage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            onPanEnd={handlePanEnd}
            className="w-full cursor-grab active:cursor-grabbing touch-pan-y"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleItems.map((item) => (
                <div
                  key={item.title}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="h-full"
                >
                  <ApplicationCard item={item} theme={theme} basePath={basePath} />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next Arrows */}
      <div className="flex items-center justify-center gap-4 pt-6">
        <button
          onClick={handlePrev}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-label="Previous applications"
          className={`w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 ${isGreen ? 'hover:border-[#1E8E3E] hover:text-[#1E8E3E]' : 'hover:border-[#1575B3] hover:text-[#1575B3]'} transition-all duration-300 active:scale-95`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-label="Next applications"
          className={`w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 ${isGreen ? 'hover:border-[#1E8E3E] hover:text-[#1E8E3E]' : 'hover:border-[#1575B3] hover:text-[#1575B3]'} transition-all duration-300 active:scale-95`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};