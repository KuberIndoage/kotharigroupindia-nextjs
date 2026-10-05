'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Linkedin, X } from 'lucide-react';
import { SectionHeader } from '../solutions/SectionHeader';
import { Reveal } from '../main/Reveal';
import { boardHero, boardOfDirectors, youngLeadership, type BoardMember } from '@/data/board';

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

/* ── HERO ────────────────────────────────────────────── */
export const BoardHero: React.FC = () => {
  return (
    // <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
    //   <div className="absolute inset-0 z-0">
    //     <img
    //       src="heronew.jpg"
    //       alt="Kothari Group leadership"
    //       referrerPolicy="no-referrer"
    //       className="w-full h-full object-cover object-center"
    //     />
    //     <div className="absolute inset-0 bg-black/25 pointer-events-none" />
    //     <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
    //   </div>

    //   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full  min-h-[40dvh] sm:min-h-[100dvh] pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between">
    //     {/* <nav className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-white/60 overflow-x-auto whitespace-nowrap shrink-0">
    //       <Link href="/" className="hover:text-white transition-colors">Home</Link>
    //       <ChevronRight className="w-3 h-3 shrink-0" />
    //       <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
    //       <ChevronRight className="w-3 h-3 shrink-0" />
    //       <span className="text-white/90">Our Board</span>
    //     </nav> */}

    //     <div className="w-full flex flex-col gap-5 sm:gap-6 my-auto py-8">
    //       <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
    //         {boardHero.eyebrow}
    //       </span>
    //       <h1 className="text-4xl sm:text-6xl lg:text-6xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
    //         {boardHero.heading}
    //       </h1>
    //       <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
    //         {boardHero.description}
    //       </p>
    //     </div>

    //     {/* <div className="w-full border-t border-white/20 pt-6 mt-auto" /> */}
    //   </div>
    // </div>


<div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/heronew.jpg"
              alt="News & press releases"
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
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
                {boardHero.heading}
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                {boardHero.description}
              </p>
            </div>
          </div>
        </div>

  );
};

/* ── MEMBER CARD ─────────────────────────────────────── */
const truncateWords = (text: string, limit: number) => {
  const words = text.replace(/\s+/g, ' ').trim().split(' ');
  if (words.length <= limit) return words.join(' ');
  return words.slice(0, limit).join(' ') + '...';
};

const MemberCard: React.FC<{ member: BoardMember }> = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = member.readMoreContent.split('\n').map((p) => p.trim()).filter(Boolean);
  const preview = member.description || paragraphs[0] || '';

  return (
    <article className="group relative bg-white border border-slate-200/90 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 border-b border-slate-200">
        <img
          src={member.imageUrl}
          alt={member.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70 pointer-events-none" />
        {member.linkedin && member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 right-4 w-9 h-9 bg-white/95 text-[#0A66C2] flex items-center justify-center shadow-md hover:bg-[#0A66C2] hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-serif font-normal text-white leading-snug tracking-tight drop-shadow-md">
            {member.name}
          </h3>
          <p className="text-[11px] font-mono tracking-widest uppercase text-sky-200 mt-1">
            {member.designation}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        {!expanded ? (
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {preview}
          </p>
        ) : (
          <div className="space-y-3">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase hover:text-[#1575B3] transition-colors w-full"
        >
          <span>{expanded ? 'Read Less' : 'Read More'}</span>
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>
    </article>
  );
};

/* ── BOARD OF DIRECTORS ──────────────────────────────── */
export const BoardDirectors: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});
  const [openMember, setOpenMember] = useState<BoardMember | null>(null);
  const active = boardOfDirectors[activeIndex];

  useEffect(() => {
    if (!openMember) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMember(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [openMember]);

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <SectionHeader
          title="Board of Directors"
          description="The founders and stewards guiding Kothari Group's vision and growth."
        />

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Name tabs */}
          <div className="lg:col-span-6">
            <Reveal className="flex flex-col border-y border-slate-200 bg-white">
              {boardOfDirectors.map((member, i) => {
                const isActive = i === activeIndex;
                const isBodyOpen = isActive && !collapsed[i];
                return (
                  <button
                    key={member.name}
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => setCollapsed((prev) => ({ ...prev, [i]: !prev[i] }))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setCollapsed((prev) => ({ ...prev, [i]: !prev[i] }));
                      }
                    }}
                    className={`group relative flex flex-col px-5 sm:px-6 py-5 text-left border-b border-slate-100 last:border-b-0 transition-colors ${
                      isActive ? 'bg-[#F5F6F8]' : 'hover:bg-[#F5F6F8]'
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute left-0 top-0 h-full w-[3px] bg-[#1575B3] origin-top transition-transform duration-300 ${
                        isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                      }`}
                    />
                    <span className="flex items-center gap-4 sm:gap-5">
                      <span
                        className={`flex items-center justify-center w-9 h-9 shrink-0 border font-mono text-xs transition-all duration-300 ${
                          isActive
                            ? 'bg-[#1575B3] border-[#1575B3] text-white'
                            : 'border-slate-200 text-slate-400 group-hover:border-[#1575B3]/40 group-hover:text-[#1575B3]'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span
                          className={`block text-base font-semibold leading-snug transition-colors ${
                            isActive ? 'text-[#1575B3]' : 'text-slate-900 group-hover:text-slate-700'
                          }`}
                        >
                          {member.name}
                        </span>
                        <span className="block mt-1 text-[11px] font-mono tracking-[0.18em] uppercase text-slate-500">
                          {member.designation}
                        </span>
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                          isActive
                            ? `translate-x-0 opacity-100 text-[#1575B3] ${isBodyOpen ? 'rotate-90' : ''}`
                            : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        }`}
                      />
                    </span>
                    {isBodyOpen && (
                      <span className="fade-in block mt-4 pt-4 border-t border-slate-200/80 text-sm text-slate-600 font-normal leading-relaxed">
                        <span className="block">{truncateWords(member.readMoreContent, 100)}</span>
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMember(member);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.stopPropagation();
                              setOpenMember(member);
                            }
                          }}
                          className="mt-3.5 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase text-[#1575B3] hover:text-[#0E588A] transition-colors cursor-pointer select-none"
                        >
                          Read More
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </span>
                    )}
                  </button>
                );
              })}
            </Reveal>
          </div>

{/* Portrait preview */}
          <div className="lg:col-span-6">
            <Reveal delay={80}>
              <div className="relative overflow-hidden bg-slate-100 mx-auto max-w-[440px] sm:max-w-[500px] aspect-[4/5] sm:aspect-[3/4]">
                {boardOfDirectors.map((member, i) => (
                  <img
                    key={member.name}
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-out ${
                      i === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" /> */}

                {/* <div className="absolute top-5 right-5 w-11 h-11 bg-white/10 backdrop-blur-md border border-white/25 text-white flex items-center justify-center font-mono text-xs">
                  {String(activeIndex + 1).padStart(2, '0')}
                </div> */}

                {/* <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                  <div className="transition-opacity duration-300">
                    <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-sky-200">
                      {active.designation}
                    </p>
                    <h3 className="mt-1.5 text-2xl sm:text-3xl font-serif font-normal text-white leading-tight tracking-tight">
                      {active.name}
                    </h3>
                  </div>
                  {active.linkedin && active.linkedinUrl && (
                    <a
                      href={active.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${active.name} on LinkedIn`}
                      className="w-10 h-10 shrink-0 bg-white/95 text-[#0A66C2] flex items-center justify-center shadow-md hover:bg-[#0A66C2] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div> */}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

{openMember && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenMember(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-zoom-out"
          />
          <div className="relative w-full max-w-lg sm:max-w-xl bg-white shadow-2xl max-h-[85vh] overflow-y-auto fade-in">
            <button
              type="button"
              onClick={() => setOpenMember(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-[#1575B3] hover:text-white transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="p-7 sm:p-9 border-b border-slate-200 bg-[#F5F6F8]">
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#1575B3]">
                {openMember.designation}
              </p>
              <h3 className="mt-1.5 text-2xl sm:text-3xl font-serif font-normal text-slate-900 leading-tight tracking-tight">
                {openMember.name}
              </h3>
            </div>
            <div className="p-7 sm:p-9 space-y-4">
              {openMember.readMoreContent
                .split('\n')
                .map((p) => p.trim())
                .filter(Boolean)
                .map((para, idx) => (
                  <p key={idx} className="text-sm text-slate-600 font-normal leading-relaxed">
                    {para}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* ── YOUNG LEADERSHIP ────────────────────────────────── */
export const BoardYoungLeadership: React.FC = () => {
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

  const totalPages = Math.max(1, Math.ceil(youngLeadership.members.length / itemsPerPage));
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

  const visibleMembers = youngLeadership.members.slice(
    safePage * itemsPerPage,
    safePage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={youngLeadership.heading}
          description={youngLeadership.description}
        />

        <div className="relative min-h-[200px] w-full overflow-hidden touch-pan-y" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleMembers.map((member) => (
                  <Reveal key={member.name} delay={80} className="h-full">
                    <MemberCard member={member} />
                  </Reveal>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Previous team members"
            className="w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 hover:border-[#1575B3] hover:text-[#1575B3] transition-all duration-300 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Next team members"
            className="w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 hover:border-[#1575B3] hover:text-[#1575B3] transition-all duration-300 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
