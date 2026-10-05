'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

// Pointer-based swipe detection (touch + mouse). Works reliably on mobile,
// pauses auto-slide during the gesture, and suppresses the link click that
// would otherwise fire after a swipe. NOTE: must NOT use setPointerCapture —
// capture retargets the click event to the capture element, which swallows
// inner <Link> clicks (blog/article cards would no longer open).
//
// IMPORTANT: inside an AnimatePresence slider Chrome sometimes fails to
// synthesize a native `click` for the anchor, so navigation never happens.
// To be immune to that, a CLEAN TAP (delta <= 6) on any <a href> inside the
// slider calls `onTap(href)` directly (router.push) instead of waiting for
// the native click. Native clicks still work when they DO fire.
function useSwipeController(
  onSwipe: (dir: 1 | -1) => void,
  onPauseChange: (paused: boolean) => void,
  onTap?: (href: string) => void
) {
  const startX = React.useRef<number | null>(null);
  const didDrag = React.useRef(false);
  const onTapRef = React.useRef(onTap);
  onTapRef.current = onTap;

  const handlePointerMove = React.useCallback((_e: PointerEvent) => {
    // Movement is observed here but NOT flagged as a drag — only an actual
    // swipe (delta > threshold in pointerup) marks didDrag, otherwise tiny
    // finger jitter on a tap would swallow the card's link click.
  }, []);

  const handlePointerCancel = React.useCallback(() => {
    startX.current = null;
    onPauseChange(false);
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerEnd);
    window.removeEventListener('pointercancel', handlePointerCancel);
  }, []);

  const handlePointerEnd = React.useCallback(
    (e: PointerEvent) => {
      if (startX.current === null) return;
      const delta = e.clientX - startX.current;
      startX.current = null;
      onPauseChange(false);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerEnd);
      window.removeEventListener('pointercancel', handlePointerCancel);

      if (Math.abs(delta) > 50) {
        didDrag.current = true;
        onSwipe(delta < 0 ? 1 : -1);
      } else {
        didDrag.current = false;
        if (Math.abs(delta) <= 6) {
          const nearest = (e.target as Element | null)?.closest?.(
            'a[href]'
          ) as HTMLAnchorElement | null;
          const href = nearest?.getAttribute('href');
          if (href) onTapRef.current?.(href);
        }
      }
    },
    [onSwipe, onPauseChange]
  );

  const handlePointerDown = React.useCallback(
    (e: React.PointerEvent) => {
      startX.current = e.clientX;
      didDrag.current = false;
      onPauseChange(true);
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerEnd);
      window.addEventListener('pointercancel', handlePointerCancel);
    },
    [onPauseChange, handlePointerMove, handlePointerEnd, handlePointerCancel]
  );

  const handleStageClick = React.useCallback((e: React.MouseEvent) => {
    if (didDrag.current) {
      e.preventDefault();
      e.stopPropagation();
      didDrag.current = false;
    }
  }, []);

  return {
    onPointerDown: handlePointerDown,
    onStageClick: handleStageClick,
  };
}

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

export interface HomeNewsCard {
  key: string;
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  href: string;
  cta: string;
}

const FALLBACK_BLOGS: HomeNewsCard[] = [
  {
    key: 'BLOG-01',
      title: 'CPVC vs. UPVC: Choosing The Right Plumbing Pipe For Your Building',
      snippet: 'An engineering comparison of temperature thresholds, working pressure SDR ratings, chemical resistance, and solvent welding best practices.',
      date: 'June 2026',
      readTime: '8 MIN READ',
      category: 'PLUMBING SYSTEMS',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      href: '/blogs',
      cta: 'READ BLOG',
    },
    {
      key: 'BLOG-02',
      title: 'How Micro Irrigation Boosts Crop Yield By 40% With 50% Less Water',
      snippet: 'Discover the science behind targeted root-zone drip irrigation, fertigation nutrient uptake, and preventing evaporation losses in arid farmland.',
      date: 'July 2026',
      readTime: '12 MIN READ',
      category: 'MICRO IRRIGATION',
      image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg',
      href: '/blogs',
      cta: 'READ BLOG',
    },
    {
      key: 'BLOG-03',
      title: 'Preventing Borewell Column Failure: Submersible Pipe Installation Rules',
      snippet: 'Key guidelines on thread locking, torque limits, pump weight support, and preventing back-siphonage in deep underground borewells.',
      date: 'May 2026',
      readTime: '6 MIN READ',
      category: 'AGRI & BOREWELL',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
      href: '/blogs',
      cta: 'READ BLOG',
    },
  ];

  const FALLBACK_NEWS: HomeNewsCard[] = [
    {
      key: 'NEWS-01',
      title: 'Kothari Group Expands High-Density Polyethylene Production Line',
      snippet: 'State-of-the-art extrusion machinery deployed to meet surging infrastructure demand across Western and Southern India.',
      date: 'AUG 18, 2026',
      readTime: '5 MIN READ',
      category: 'CORPORATE',
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
      href: '/press-release',
      cta: 'READ NEWS',
    },
    {
      key: 'NEWS-02',
      title: 'Next-Gen Drip Irrigation Systems Unveiled at AgriTech Summit',
      snippet: 'Introducing pressure-compensating micro drippers engineered for precise fertigation in hilly agricultural terrains.',
      date: 'JUL 24, 2026',
      readTime: '7 MIN READ',
      category: 'AGRI TECH',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      href: '/press-release',
      cta: 'READ NEWS',
    },
    {
      key: 'NEWS-03',
      title: 'Kothari Performance Labs Achieves ISO 17025 Accreditation',
      snippet: 'Independent quality validation setup reinforces strict quality control standardizations across polymer pipe testing.',
      date: 'JUN 10, 2026',
      readTime: '4 MIN READ',
      category: 'QUALITY',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
      href: '/press-release',
      cta: 'READ NEWS',
    },
  ];

  function NewsCard({ item, idx, navigate }: { item: HomeNewsCard; idx: number; navigate: (href: string) => void }) {
    return (
      <Reveal key={item.key} delay={(idx % 3) * 90} className="h-full">
        <Link href={item.href} className="block h-full" draggable={false} onClick={(e) => { e.preventDefault(); navigate(item.href); }}>
          <article className="group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden">

            {/* Image Header - full image, not cropped */}
            <div className="relative overflow-hidden bg-slate-900 border-b border-slate-200">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                draggable={false}
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.opacity = '0.3';
                }}
                className="w-full h-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-black text-white text-[10px] font-mono tracking-widest font-medium px-3 py-1 uppercase">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-500 uppercase font-medium">
                  <span>{item.date}</span>
                  {/* <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {item.readTime}
                  </span> */}
                </div>

                <h3 className="text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-[#1575B3] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                  {item.snippet}
                </p>
              </div>

              {/* Card CTA */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase group-hover:text-[#1575B3] transition-colors">
                <span>{item.cta}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </article>
        </Link>
      </Reveal>
    );
  }

  export const News: React.FC<{
    blogPosts?: HomeNewsCard[];
    newsItems?: HomeNewsCard[];
  }> = ({
    blogPosts = FALLBACK_BLOGS,
    newsItems = FALLBACK_NEWS,
  }) => {
    const router = useRouter();
    const lastNavAt = React.useRef(0);
    // Navigate to a card's href exactly once per interaction — guards against
    // double navigation when both the native click and the tap fallback fire.
    const navigate = React.useCallback(
      (href: string) => {
        const now = Date.now();
        if (now - lastNavAt.current > 250) {
          lastNavAt.current = now;
          router.push(href);
        }
      },
      [router]
    );

    // Blog slider state (auto-slide + drag/swipe pattern).
    const [blogItemsPerPage, setBlogItemsPerPage] = React.useState(3);
    const [blogCurrentPage, setBlogCurrentPage] = React.useState(0);
    const [blogDirection, setBlogDirection] = React.useState(1);
    const [blogPaused, setBlogPaused] = React.useState(false);

    // News slider state (same pattern).
    const [newsItemsPerPage, setNewsItemsPerPage] = React.useState(3);
    const [newsCurrentPage, setNewsCurrentPage] = React.useState(0);
    const [newsDirection, setNewsDirection] = React.useState(1);
    const [newsPaused, setNewsPaused] = React.useState(false);

    React.useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setBlogItemsPerPage(1);
          setNewsItemsPerPage(1);
        } else if (window.innerWidth < 1024) {
          setBlogItemsPerPage(2);
          setNewsItemsPerPage(2);
        } else {
          setBlogItemsPerPage(3);
          setNewsItemsPerPage(3);
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const blogTotalPages = Math.max(1, Math.ceil(blogPosts.length / blogItemsPerPage));
    const blogSafePage = blogCurrentPage % blogTotalPages;

    const handleBlogNext = React.useCallback(() => {
      setBlogDirection(1);
      setBlogCurrentPage((prev) => (prev + 1) % blogTotalPages);
    }, [blogTotalPages]);

    const handleBlogPrev = React.useCallback(() => {
      setBlogDirection(-1);
      setBlogCurrentPage(
        (prev) => (prev - 1 + blogTotalPages) % blogTotalPages
      );
    }, [blogTotalPages]);

    React.useEffect(() => {
      if (blogPaused || blogTotalPages <= 1) return;

      const autoSlideTimer = setInterval(() => {
        handleBlogNext();
      }, 4000);

      return () => clearInterval(autoSlideTimer);
    }, [blogPaused, blogTotalPages, handleBlogNext]);

    const visibleBlogPosts = blogPosts.slice(
      blogSafePage * blogItemsPerPage,
      blogSafePage * blogItemsPerPage + blogItemsPerPage
    );

    const blogSwipe = useSwipeController(
      (dir: 1 | -1) => (dir === 1 ? handleBlogNext() : handleBlogPrev()),
      setBlogPaused,
      navigate
    );

    const newsTotalPages = Math.max(1, Math.ceil(newsItems.length / newsItemsPerPage));
    const newsSafePage = newsCurrentPage % newsTotalPages;

    const handleNewsNext = React.useCallback(() => {
      setNewsDirection(1);
      setNewsCurrentPage((prev) => (prev + 1) % newsTotalPages);
    }, [newsTotalPages]);

    const handleNewsPrev = React.useCallback(() => {
      setNewsDirection(-1);
      setNewsCurrentPage(
        (prev) => (prev - 1 + newsTotalPages) % newsTotalPages
      );
    }, [newsTotalPages]);

    React.useEffect(() => {
      if (newsPaused || newsTotalPages <= 1) return;

      const autoSlideTimer = setInterval(() => {
        handleNewsNext();
      }, 4000);

      return () => clearInterval(autoSlideTimer);
    }, [newsPaused, newsTotalPages, handleNewsNext]);

    const visibleNewsItems = newsItems.slice(
      newsSafePage * newsItemsPerPage,
      newsSafePage * newsItemsPerPage + newsItemsPerPage
    );

    const newsSwipe = useSwipeController(
      (dir: 1 | -1) => (dir === 1 ? handleNewsNext() : handleNewsPrev()),
      setNewsPaused,
      navigate
    );

    return (
    <div className="w-full text-slate-900">

      {/* ==================== LATEST BLOGS (Grid Cards) ==================== */}
      <section id="blogs" className="w-full bg-[#F5F6F8] pt-16 pb-16 sm:pt-20 sm:pb-20 border-b border-slate-300/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300/80">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
                Latest Blogs
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              Engineering deep-dives, agricultural guides, and polymer specifications curated by Kothari specialists.
            </p>
          </div>

          {/* Blogs Slider / Grid */}
          {blogPosts.length > blogItemsPerPage ? (
            <div className="relative w-full py-6 px-1 touch-pan-y overflow-hidden" onClick={blogSwipe.onStageClick}>
              <AnimatePresence initial={false} custom={blogDirection} mode="wait">
                <motion.div
                  key={blogSafePage}
                  custom={blogDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  onPointerDown={blogSwipe.onPointerDown}
                  className="w-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleBlogPosts.map((item, idx) => (
                      <div
                        key={item.key}
                        onMouseEnter={() => setBlogPaused(true)}
                        onMouseLeave={() => setBlogPaused(false)}
                        className="h-full"
                      >
                        <NewsCard item={item} idx={idx} navigate={navigate} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Arrows */}
              <div className="flex items-center justify-center gap-4 pt-8">
                <button
                  onClick={handleBlogPrev}
                  onMouseEnter={() => setBlogPaused(true)}
                  onMouseLeave={() => setBlogPaused(false)}
                  aria-label="Previous blogs"
                  className="w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 hover:border-[#1575B3] hover:text-[#1575B3] transition-all duration-300 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleBlogNext}
                  onMouseEnter={() => setBlogPaused(true)}
                  onMouseLeave={() => setBlogPaused(false)}
                  aria-label="Next blogs"
                  className="w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 hover:border-[#1575B3] hover:text-[#1575B3] transition-all duration-300 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((item, idx) => (
                  <NewsCard key={item.key} item={item} idx={idx} navigate={navigate} />
                ))}
              </div>
            </Reveal>
          )}

        </div>
      </section>

      {/* ==================== NEWS AND ARTICLES (Editorial List) ==================== */}
      <section id="news" className="w-full py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-300/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
                News & Events
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              Manufacturing expansions, corporate developments, and official press releases from Kothari Group.
            </p>
          </div>

          {/* News and Article Slider / Grid */}
          {newsItems.length > newsItemsPerPage ? (
            <div className="relative w-full py-6 px-1 touch-pan-y overflow-hidden" onClick={newsSwipe.onStageClick}>
              <AnimatePresence initial={false} custom={newsDirection} mode="wait">
                <motion.div
                  key={newsSafePage}
                  custom={newsDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  onPointerDown={newsSwipe.onPointerDown}
                  className="w-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleNewsItems.map((item, idx) => (
                      <div
                        key={item.key}
                        onMouseEnter={() => setNewsPaused(true)}
                        onMouseLeave={() => setNewsPaused(false)}
                        className="h-full"
                      >
                        <NewsCard item={item} idx={idx} navigate={navigate} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Arrows */}
              <div className="flex items-center justify-center gap-4 pt-8">
                <button
                  onClick={handleNewsPrev}
                  onMouseEnter={() => setNewsPaused(true)}
                  onMouseLeave={() => setNewsPaused(false)}
                  aria-label="Previous news"
                  className="w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 hover:border-[#1575B3] hover:text-[#1575B3] transition-all duration-300 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNewsNext}
                  onMouseEnter={() => setNewsPaused(true)}
                  onMouseLeave={() => setNewsPaused(false)}
                  aria-label="Next news"
                  className="w-11 h-11 flex items-center justify-center border border-slate-300 bg-white text-slate-700 hover:border-[#1575B3] hover:text-[#1575B3] transition-all duration-300 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsItems.map((item, idx) => (
                  <NewsCard key={item.key} item={item} idx={idx} navigate={navigate} />
                ))}
              </div>
            </Reveal>
          )}

        </div>
      </section>

    </div>
  );
};