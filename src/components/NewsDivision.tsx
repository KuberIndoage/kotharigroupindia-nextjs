'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Clock, Quote, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './main/Reveal';

export interface DivisionNewsCard {
  key: string;
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  href: string;
}

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

export const NewsDivision: React.FC<{ theme?: 'blue' | 'green'; newsItems?: DivisionNewsCard[]; blogPosts?: DivisionNewsCard[]; loading?: boolean }> = ({ theme = 'blue', newsItems: newsItemsProp, blogPosts: blogPostsProp, loading = false }) => {
  const isGreen = theme === 'green';
  const accentHoverBorder = isGreen ? 'hover:border-[#1E8E3E]' : 'hover:border-[#1575B3]';
  const accentGroupHoverText = isGreen ? 'group-hover:text-[#1E8E3E]' : 'group-hover:text-[#1575B3]';
  const FALLBACK_NEWS: DivisionNewsCard[] = [
    {
      key: 'NEWS-01',
      title: 'Kothari Group Expands High-Density Polyethylene Production Line',
      snippet: 'State-of-the-art extrusion machinery deployed to meet surging infrastructure demand across Western and Southern India.',
      date: 'AUG 18, 2026',
      readTime: '5 MIN READ',
      category: 'CORPORATE',
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
      href: '/press-release'
    },
    {
      key: 'NEWS-02',
      title: 'Next-Gen Drip Irrigation Systems Unveiled at AgriTech Summit',
      snippet: 'Introducing pressure-compensating micro drippers engineered for precise fertigation in hilly agricultural terrains.',
      date: 'JUL 24, 2026',
      readTime: '7 MIN READ',
      category: 'AGRI TECH',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      href: '/press-release'
    },
    {
      key: 'NEWS-03',
      title: 'Kothari Performance Labs Achieves ISO 17025 Accreditation',
      snippet: 'Independent quality validation setup reinforces strict quality control standardizations across polymer pipe testing.',
      date: 'JUN 10, 2026',
      readTime: '4 MIN READ',
      category: 'QUALITY',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
      href: '/press-release'
    }
  ];

  const testimonials = [
    {
      quote: "We are an authorised dealer of Kothari Group & dealing exclusively with Kothari Group since the last 20 years. Thanks to the company for supplying quality products consistently & its team for providing prompt services all the time.",
      author: 'Kumareshwar Traders',
      role: 'Mudhol, Karnataka',
      company: 'Apex Buildcon Projects'
    },
    {
      quote: "We are really delighted by the quality of Kothari Group’s Products & Services. Thank you so much, and we will be looking forward to an excellent continuing business relationship.",
      author: 'Arihant Marketing',
      role: ' Bijapur Karnataka',
      company: 'Nashik Agriculture Cooperative'
    },
    {
      quote: "Kothari Group’s Kosons Submersible Cables & Wires are excellent and specially designed Products. The finishing of the Submersible Cables is excellent.",
      author: 'Nitin Omprakash Mundada',
      role: ' Beed(MH)',
      company: 'Smart Infra Consultants'
    }
  ];

  const FALLBACK_BLOGS: DivisionNewsCard[] = [
    {
      key: 'BLOG-01',
      title: 'CPVC vs. UPVC: Choosing The Right Plumbing Pipe For Your Building',
      snippet: 'An engineering comparison of temperature thresholds, working pressure SDR ratings, chemical resistance, and solvent welding best practices.',
      date: 'June 2026',
      readTime: '8 MIN READ',
      category: 'PLUMBING SYSTEMS',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      href: '/blogs'
    },
    {
      key: 'BLOG-02',
      title: 'How Micro Irrigation Boosts Crop Yield By 40% With 50% Less Water',
      snippet: 'Discover the science behind targeted root-zone drip irrigation, fertigation nutrient uptake, and preventing evaporation losses in arid farmland.',
      date: 'July 2026',
      readTime: '12 MIN READ',
      category: 'MICRO IRRIGATION',
      image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg',
      href: '/blogs'
    },
    {
      key: 'BLOG-03',
      title: 'Preventing Borewell Column Failure: Submersible Pipe Installation Rules',
      snippet: 'Key guidelines on thread locking, torque limits, pump weight support, and preventing back-siphonage in deep underground borewells.',
      date: 'May 2026',
      readTime: '6 MIN READ',
      category: 'AGRI & BOREWELL',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
      href: '/blogs'
    }
  ];

  const newsItems = newsItemsProp ?? FALLBACK_NEWS;
  const blogPosts = blogPostsProp ?? FALLBACK_BLOGS;

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

  // Blog slider state (mirrors FeaturedProducts auto-slide pattern).
  const [blogItemsPerPage, setBlogItemsPerPage] = React.useState(3);
  const [blogCurrentPage, setBlogCurrentPage] = React.useState(0);
  const [blogDirection, setBlogDirection] = React.useState(1);
  const [blogPaused, setBlogPaused] = React.useState(false);

  // News slider state (same auto-slide + drag pattern as the blog slider).
  const [newsItemsPerPage, setNewsItemsPerPage] = React.useState(3);
  const [newsCurrentPage, setNewsCurrentPage] = React.useState(0);
  const [newsDirection, setNewsDirection] = React.useState(1);
  const [newsPaused, setNewsPaused] = React.useState(false);

  // Testimonials slider state (same pattern).
  const [testimonialsItemsPerPage, setTestimonialsItemsPerPage] = React.useState(3);
  const [testimonialsCurrentPage, setTestimonialsCurrentPage] = React.useState(0);
  const [testimonialsDirection, setTestimonialsDirection] = React.useState(1);
  const [testimonialsPaused, setTestimonialsPaused] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBlogItemsPerPage(1);
        setNewsItemsPerPage(1);
        setTestimonialsItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setBlogItemsPerPage(2);
        setNewsItemsPerPage(2);
        setTestimonialsItemsPerPage(2);
      } else {
        setBlogItemsPerPage(3);
        setNewsItemsPerPage(3);
        setTestimonialsItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blogTotalPages = Math.max(
    1,
    Math.ceil(blogPosts.length / blogItemsPerPage)
  );
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

  const blogSlideVariants = {
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

  const visibleBlogPosts = blogPosts.slice(
    blogSafePage * blogItemsPerPage,
    blogSafePage * blogItemsPerPage + blogItemsPerPage
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

  const blogSwipe = useSwipeController(
    (dir: 1 | -1) => (dir === 1 ? handleBlogNext() : handleBlogPrev()),
    setBlogPaused,
    navigate
  );

  const newsSwipe = useSwipeController(
    (dir: 1 | -1) => (dir === 1 ? handleNewsNext() : handleNewsPrev()),
    setNewsPaused,
    navigate
  );

  const testimonialsTotalPages = Math.max(
    1,
    Math.ceil(testimonials.length / testimonialsItemsPerPage)
  );
  const testimonialsSafePage = testimonialsCurrentPage % testimonialsTotalPages;

  const handleTestimonialsNext = React.useCallback(() => {
    setTestimonialsDirection(1);
    setTestimonialsCurrentPage((prev) => (prev + 1) % testimonialsTotalPages);
  }, [testimonialsTotalPages]);

  const handleTestimonialsPrev = React.useCallback(() => {
    setTestimonialsDirection(-1);
    setTestimonialsCurrentPage(
      (prev) => (prev - 1 + testimonialsTotalPages) % testimonialsTotalPages
    );
  }, [testimonialsTotalPages]);

  React.useEffect(() => {
    if (testimonialsPaused || testimonialsTotalPages <= 1) return;

    const autoSlideTimer = setInterval(() => {
      handleTestimonialsNext();
    }, 4000);

    return () => clearInterval(autoSlideTimer);
  }, [testimonialsPaused, testimonialsTotalPages, handleTestimonialsNext]);

  const visibleTestimonials = testimonials.slice(
    testimonialsSafePage * testimonialsItemsPerPage,
    testimonialsSafePage * testimonialsItemsPerPage + testimonialsItemsPerPage
  );

  const testimonialsSwipe = useSwipeController(
    (dir: 1 | -1) => (dir === 1 ? handleTestimonialsNext() : handleTestimonialsPrev()),
    setTestimonialsPaused,
    navigate
  );

  const NewsCardSkeleton: React.FC = () => (
    <div className="bg-white border border-slate-200/90 shadow-sm overflow-hidden">
      <div className="h-44 sm:h-48 bg-slate-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-3 w-1/3 bg-slate-200 animate-pulse" />
        <div className="h-5 w-5/6 bg-slate-200 animate-pulse" />
        <div className="h-3 w-full bg-slate-100 animate-pulse" />
        <div className="h-3 w-4/5 bg-slate-100 animate-pulse" />
        <div className="h-3 w-2/3 bg-slate-100 animate-pulse" />
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <div className="h-3 w-24 bg-slate-200 animate-pulse" />
        </div>
      </div>
    </div>
  );

  const BlogSkeleton: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[0, 1, 2].map((i) => (
        <NewsCardSkeleton key={i} />
      ))}
    </div>
  );

  const BlogCard: React.FC<{ item: DivisionNewsCard }> = ({ item }) => (
    <Link href={item.href} draggable={false} className="block h-full" onClick={(e) => { e.preventDefault(); navigate(item.href); }}>
      <article className={`group relative ${isGreen ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl ${accentHoverBorder} transition-all duration-500 overflow-hidden`}>
        {/* Image Header */}
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
            className="w-full h-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
          {/* <div className="absolute top-4 left-4">
            <span className="bg-black text-white text-[10px] font-mono tracking-widest font-medium px-3 py-1 uppercase">
              {item.category}
            </span>
          </div> */}
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-500 uppercase font-medium">
              <span>{item.date}</span>
            </div>
            <h3 className={`text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight ${accentGroupHoverText} transition-colors duration-300`}>
              {item.title}
            </h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
              {item.snippet}
            </p>
          </div>
          <div className={`pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase ${accentGroupHoverText} transition-colors`}>
            <span>READ BLOG</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </article>
    </Link>
  );

  const NewsCard: React.FC<{ item: DivisionNewsCard }> = ({ item }) => (
    <Link href={item.href} draggable={false} className="block h-full" onClick={(e) => { e.preventDefault(); navigate(item.href); }}>
      <article className={`group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl ${accentHoverBorder} transition-all duration-500 overflow-hidden`}>
        {/* Image Header */}
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
            className="w-full h-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
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

            <h3 className={`text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight ${accentGroupHoverText} transition-colors duration-300`}>
              {item.title}
            </h3>

            <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
              {item.snippet}
            </p>
          </div>

          {/* Card CTA */}
          <div
            className={`pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase ${accentGroupHoverText} transition-colors`}
          >
            <span>READ NEWS</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </article>
    </Link>
  );

  return (
    <div className="w-full text-slate-900">

      {/* ==================== 1. TESTIMONIALS (GREY BG) ==================== */}
      <section id="testimonials" className={`w-full py-16 sm:py-24 ${isGreen ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} text-slate-900 scroll-mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
                Testimonials
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              What engineers, agricultural experts, and project managers say about our piping solutions.
            </p>
          </div>

          {/* Testimonial Cards */}
          {testimonials.length > testimonialsItemsPerPage ? (
            <div className="relative w-full py-6 px-1 touch-pan-y overflow-hidden" onClick={testimonialsSwipe.onStageClick}>
              <AnimatePresence initial={false} custom={testimonialsDirection} mode="wait">
                <motion.div
                  key={testimonialsSafePage}
                  custom={testimonialsDirection}
                  variants={blogSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  onPointerDown={testimonialsSwipe.onPointerDown}
                  className="w-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleTestimonials.map((item, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setTestimonialsPaused(true)}
                        onMouseLeave={() => setTestimonialsPaused(false)}
                        className="h-full"
                      >
                        <div className={`bg-white border border-slate-200 p-8 flex flex-col justify-between relative h-full ${accentHoverBorder} hover:shadow-lg transition-all duration-300 group`}>
                          <Quote className={`w-8 h-8 ${isGreen ? 'text-[#1E8E3E]/20' : 'text-[#1575B3]/20'} absolute top-6 right-6`} />

                          <div className="space-y-6 relative z-10">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${isGreen ? 'fill-[#1E8E3E] text-[#1E8E3E]' : 'fill-[#1575B3] text-[#1575B3]'}`} />
                              ))}
                            </div>

                            <p className="text-sm sm:text-base text-slate-700 font-serif italic leading-relaxed">
                              &ldquo;{item.quote}&rdquo;
                            </p>
                          </div>

                          <div className="pt-6 mt-6 border-t border-slate-200">
                            <h4 className={`text-base font-medium text-slate-900 ${accentGroupHoverText} transition-colors duration-300`}>
                              {item.author}
                            </h4>
                            <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dash Indicators */}
              <div className="flex items-center justify-center gap-3 pt-8">
                {Array.from({ length: testimonialsTotalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setTestimonialsDirection(idx > testimonialsSafePage ? 1 : -1);
                      setTestimonialsCurrentPage(idx);
                    }}
                    className={`h-1 transition-all duration-500 ${
                      idx === testimonialsSafePage
                        ? isGreen
                          ? `w-12 bg-[#1E8E3E]`
                          : `w-12 bg-[#1575B3]`
                        : 'w-4 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 90} className="h-full">
                    <div
                      className={`bg-white border border-slate-200 p-8 flex flex-col justify-between relative ${accentHoverBorder} hover:shadow-lg transition-all duration-300 group h-full`}
                    >
                      <Quote className={`w-8 h-8 ${isGreen ? 'text-[#1E8E3E]/20' : 'text-[#1575B3]/20'} absolute top-6 right-6`} />

                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${isGreen ? 'fill-[#1E8E3E] text-[#1E8E3E]' : 'fill-[#1575B3] text-[#1575B3]'}`} />
                          ))}
                        </div>

                        <p className="text-sm sm:text-base text-slate-700 font-serif italic leading-relaxed">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-200">
                        <h4 className={`text-base font-medium text-slate-900 ${accentGroupHoverText} transition-colors duration-300`}>
                          {item.author}
                        </h4>
                        <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          )}

        </div>
      </section>

      {/* ==================== 2. LATEST BLOGS (GREY BG) ==================== */}
      <section id="blogs" className="w-full bg-white py-16 sm:py-24 border-y border-slate-300/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
                Latest Blogs
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              Engineering deep-dives, agricultural guides, and polymer specifications curated by Kothari specialists.
            </p>
          </div>

          {/* Blogs Grid / Auto Slider */}
          {loading ? (
            <BlogSkeleton />
          ) : blogPosts.length > blogItemsPerPage ? (
            <div className="relative w-full py-6 px-1 touch-pan-y overflow-hidden" onClick={blogSwipe.onStageClick}>
              <AnimatePresence initial={false} custom={blogDirection} mode="wait">
                <motion.div
                  key={blogSafePage}
                  custom={blogDirection}
                  variants={blogSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  onPointerDown={blogSwipe.onPointerDown}
                  className="w-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleBlogPosts.map((item) => (
                      <div
                        key={item.key}
                        onMouseEnter={() => setBlogPaused(true)}
                        onMouseLeave={() => setBlogPaused(false)}
                        className="h-full"
                      >
                        <BlogCard item={item} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dash Indicators */}
              <div className="flex items-center justify-center gap-3 pt-8">
                {Array.from({ length: blogTotalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setBlogDirection(idx > blogSafePage ? 1 : -1);
                      setBlogCurrentPage(idx);
                    }}
                    className={`h-1 transition-all duration-500 ${
                      idx === blogSafePage
                        ? isGreen
                          ? `w-12 bg-[#1E8E3E]`
                          : `w-12 bg-[#1575B3]`
                        : 'w-4 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((item, idx) => (
                  <Reveal key={item.key} delay={idx * 90} className="h-full">
                    <BlogCard item={item} />
                  </Reveal>
                ))}
              </div>
            </Reveal>
          )}

        </div>
      </section>


      {/* ==================== 3. NEWS AND ARTICLES (WHITE BG) ==================== */}
      <section id="news" className={`w-full py-16 sm:py-24 ${isGreen ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} text-slate-900 border-b ${isGreen ? 'border-[#1E8E3E]/15' : 'border-slate-300/70'} scroll-mt-20`}>
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

          {/* News Cards Grid / Auto Slider */}
          {loading ? (
            <BlogSkeleton />
          ) : newsItems.length > newsItemsPerPage ? (
            <div className="relative w-full py-6 px-1 touch-pan-y overflow-hidden" onClick={newsSwipe.onStageClick}>
              <AnimatePresence initial={false} custom={newsDirection} mode="wait">
                <motion.div
                  key={newsSafePage}
                  custom={newsDirection}
                  variants={blogSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  onPointerDown={newsSwipe.onPointerDown}
                  className="w-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleNewsItems.map((item) => (
                      <div
                        key={item.key}
                        onMouseEnter={() => setNewsPaused(true)}
                        onMouseLeave={() => setNewsPaused(false)}
                        className="h-full"
                      >
                        <NewsCard item={item} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dash Indicators */}
              <div className="flex items-center justify-center gap-3 pt-8">
                {Array.from({ length: newsTotalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setNewsDirection(idx > newsSafePage ? 1 : -1);
                      setNewsCurrentPage(idx);
                    }}
                    className={`h-1 transition-all duration-500 ${
                      idx === newsSafePage
                        ? isGreen
                          ? `w-12 bg-[#1E8E3E]`
                          : `w-12 bg-[#1575B3]`
                        : 'w-4 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item, idx) => (
                <Reveal key={item.key} delay={idx * 90} className="h-full">
                  <NewsCard item={item} />
                </Reveal>
              ))}
            </div>
          </Reveal>
          )}

        </div>
      </section>

    </div>
  );
};