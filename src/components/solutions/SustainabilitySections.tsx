'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Sun, Leaf, Users } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Reveal } from '../main/Reveal';

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#FF0000"
      fillRule="evenodd"
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
    />
    <path fill="white" d="M9.545 8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const PILLARS = [
  {
    num: '01',
    icon: Sun,
    title: '100% Green Energy Powered',
    text: 'We use solar energy in our production facilities to produce sustainable products.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '02',
    icon: Leaf,
    title: 'Sustainable Product Portfolio',
    text: 'Our pipes and irrigation systems will serve for a long time and do not lead to wastage of water. Thus, we create durable products with low water loss making use of water supply efficiently for agriculture and infrastructure purposes.',
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '03',
    icon: Users,
    title: 'Enabling Small-Scale Farmers',
    text: 'We support farmers and dealers to learn about improved approaches to irrigation and water management through educational and outreach initiatives.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
  },
];

export const SustainPillars: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Our Sustainability Pillars"
          description="Our sustainable practices rely on three key commitments that we adhere to in sustainable manufacturing, responsible management of water, and community development. "
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.num} delay={idx * 90} className="h-full">
                <article className="group relative bg-white border border-slate-200/90 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] hover:-translate-y-1 transition-all duration-500 overflow-hidden">

                  {/* Image Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-200">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                    {/* Number Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black text-white text-[10px] font-mono tracking-widest font-medium px-3 py-1">
                        {pillar.num}
                      </span>
                    </div>

                    {/* Icon Chip */}
                    {/* <div className="absolute bottom-4 left-4 sm:left-6 w-10 h-10 bg-white flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-[#1575B3]" />
                    </div> */}
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-[#1575B3] transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const SUSTAINABILITY_INTRO =
  `Kothari Group stands for sustainability in pipe production and irrigation practices. We aim for responsible and efficient use of energy and water in our production processes, and to produce durable products to decrease water loss and wastage.`;

export const SustainHero: React.FC = () => {
  return (
    <div className="relative w-full  min-h-[40dvh] sm:min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
          alt="Solar-powered manufacturing at Kothari Group"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />

        {/* Base Dark Overlay */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Top-Heavy Gradient Overlay for increased top contrast and navbar contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
      </div>

      {/* Main Container - Full Height Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full  min-h-[40dvh] sm:min-h-[100dvh] pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between">

        {/* Breadcrumb */}
        {/* <nav className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-white/60 overflow-x-auto whitespace-nowrap shrink-0">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-white/90">Sustainability</span>
        </nav> */}

        {/* Headline Section - Centered Vertically */}
        <div className="w-full flex flex-col gap-5 sm:gap-6 my-auto py-8">
          <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
            Our Responsibility
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
            Sustainability at Kothari Group
          </h1>
          {/* <p className="text-base sm:text-xl font-semibold text-white leading-snug max-w-3xl drop-shadow-md">
            Every drop counts — in our factories and on every farm we serve.
          </p> */}
        </div>

        {/* Stats Grid & Video - Anchored at Bottom */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-stretch lg:items-end gap-6 sm:gap-8 lg:gap-12 w-full mt-auto">

          {/* Left Side: Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 w-full lg:w-auto border-t border-white/20 pt-6">
            {[
              { value: '35+', label: 'Years of excellence' },
  { value: '9', label: 'Factories' },
  { value: '11', label: 'Warehouses' },
  { value: '10', label: `Countries products exported` },

            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Side: Video Card */}
          <div className="w-full lg:w-auto lg:max-w-[420px] shrink-0">
            <a
              href="https://www.youtube.com/watch?v=IZ1k7fZDNss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch our story on YouTube"
              className="group card bg-black/50 backdrop-blur-md border border-white/20 rounded-sm shadow-2xl overflow-hidden block cursor-pointer"
            >
              <div className="relative aspect-video w-full bg-slate-900">
                <img
                  src="https://img.youtube.com/vi/IZ1k7fZDNss/maxresdefault.jpg"
                  alt="Watch our story"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none" />
<div className="absolute inset-0 flex items-center justify-center">
                  <YouTubeIcon className="w-9 h-9 drop-shadow-lg" />
                </div>
              </div>
              <div className="px-4 py-3 text-xs font-mono tracking-widest uppercase text-white/85 group-hover:text-sky-200 flex items-center justify-between gap-3 transition-colors">
                <span>Watch our story</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export const SustainByDesign: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Sustainability, By Design"
          description="The Principles of Our Work Incorporated into All Our Supplies. "
        />
        <div className="max-w-4xl space-y-4">
          {/* <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            We don&apos;t treat sustainability as a separate checklist; it&apos;s built into the products themselves.
          </p> */}
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
         The methods of irrigation that we provide allows farmers to save water by using drip irrigation methods and automated systems reducing water loss. Our long-lasting pipes which are resistant to leakages, play a vital role in ensuring less water waste in agriculture and infrastructure.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/irrigation-division"
              className="inline-flex items-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white text-xs font-mono tracking-widest uppercase px-6 py-3.5 transition-colors"
            >
              Irrigation Solutions <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pipe-division"
              className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-[#1575B3] hover:text-[#1575B3] text-slate-700 text-xs font-mono tracking-widest uppercase px-6 py-3.5 transition-colors"
            >
              Pipe Solutions <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const VIDEO_TESTIMONIALS = [
  { id: 'IZ1k7fZDNss', title: 'Farmer Testimonial 1' },
  { id: 'BDgJgfq67_s', title: 'Farmer Testimonial 2' },
  { id: '3uNUGXYo3UM', title: 'Farmer Testimonial 3' },
  { id: 'k2Dbf9smCA4', title: 'Farmer Testimonial 4' },
  { id: 's8A44TYAS-8', title: 'Farmer Testimonial 5' },
  { id: 'fLviTf8y-Ew', title: 'Farmer Testimonial 6' },
];

const testimonialSlideVariants = {
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

export const SustainTestimonials: React.FC = () => {
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

  const totalPages = Math.max(1, Math.ceil(VIDEO_TESTIMONIALS.length / itemsPerPage));
  const safePage = currentPage % totalPages;

  const handleNext = React.useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = React.useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const autoSlideTimer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(autoSlideTimer);
  }, [isPaused, totalPages, handleNext]);

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

  const visibleTestimonials = VIDEO_TESTIMONIALS.slice(
    safePage * itemsPerPage,
    safePage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="What People Say"
          description="Farmers and partners sharing their experience with Kothari Group."
        />

        <div
          className="relative min-h-[200px] w-full overflow-hidden touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={safePage}
              custom={direction}
              variants={testimonialSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              onPanEnd={handlePanEnd}
              className="w-full cursor-grab active:cursor-grabbing touch-pan-y"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {visibleTestimonials.map((video) => (
                  <div
                    key={video.id}
                    className="group relative bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > safePage ? 1 : -1);
                setCurrentPage(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1 transition-all duration-300 ${
                idx === safePage
                  ? 'w-8 bg-[#1575B3]'
                  : 'w-2 bg-slate-300 hover:bg-[#1575B3]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
