'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  category?: string;
  link: string;
  spec?: string;
}

interface FeaturedProductsProps {
  products?: Product[];
  theme?: 'blue' | 'green';
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'CPVC Hot & Cold Water Pipes',
    subtitle: 'Advanced Plumbing Matrix',
    description: 'High-temperature resistant piping solution engineered for zero-leakage residential and commercial infrastructure.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UPVC-PIPES-FITTINGS.webp',
    category: 'Plumbing Solutions',
    link: '/pipe-division',
    spec: 'Temp Tolerance: Up to 93°C',
  },
  {
    id: '2',
    title: 'HDPE Drip Irrigation System',
    subtitle: 'Precision Yield Technology',
    description: 'Micro-drip water management engineered to maximize crop yield while reducing consumption by up to 60%.',
    image: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    category: 'Micro Irrigation',
    link: '/irrigation-division',
    spec: 'Efficiency Rate: 98%',
  },
  {
    id: '3',
    title: 'uPVC Column Pipes',
    subtitle: 'Deep-Borehole Heavy Duty',
    description: 'Heavy-duty submersible pump pipes equipped with patented locking technology for deep underground extraction.',
    image: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    category: 'Agri & Submersible',
    link: '/pipe-division',
    spec: 'Load Capacity: High PSI',
  },
  {
    id: '4',
    title: 'Agri Rigid PVC Pipes',
    description: 'Durable, chemical-resistant agricultural piping engineered for efficient high-pressure water transportation.',
    subtitle: 'High Pressure Carrier',
    image: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    category: 'Agri Solutions',
    link: '/pipe-division',
    spec: 'UV & Chemical Resistant',
  },
  {
    id: '5',
    title: 'Inline Micro Sprinkler System',
    subtitle: 'Climate Control Micro-Jet',
    description: 'Advanced micro-sprinkling tech providing hyper-uniform droplet distribution for protected cultivation.',
    image: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    category: 'Micro Irrigation',
    link: '/irrigation-division',
    spec: 'Coverage: 360° Uniformity',
  },
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products = DEFAULT_PRODUCTS,
  theme = 'blue',
}) => {
  const isGreen = theme === 'green';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [stageLayout, setStageLayout] = useState<{
    cardW: number;
    cardH: number;
    sideShift: number;
  }>({ cardW: 380, cardH: 460, sideShift: 470 });
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const stage = stageRef.current;
      if (!stage) return;
      const w = stage.clientWidth;
      const cardW = Math.min(Math.max(w * 0.58, 260), 560);
      const cardH = Math.min(Math.max(cardW * 1.05, 300), 460);
      const sideShift = cardW / 2 + Math.min(Math.max(w * 0.11, 56), 300);
      setStageLayout({ cardW, cardH, sideShift });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = products.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const autoSlideTimer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(autoSlideTimer);
  }, [isPaused, totalSlides, handleNext]);

  const getOffset = useCallback(
    (index: number) => {
      let offset = ((index - currentIndex) % totalSlides + totalSlides) % totalSlides;
      if (offset > totalSlides / 2) offset -= totalSlides;
      return offset;
    },
    [currentIndex, totalSlides]
  );

  const getCardTargets = (offset: number) => {
    const { cardW, cardH, sideShift } = stageLayout;
    const centerX = -cardW / 2;
    const centerY = -cardH / 2;
    const abs = Math.abs(offset);

    if (offset === 0) {
      return { x: centerX, y: centerY, scale: 1, rotateY: 0, opacity: 1, zIndex: 50 };
    }

    const isLeft = offset < 0;
    const x = isLeft ? centerX - sideShift : centerX + sideShift;
    const sideOpacity = abs === 1 ? 0.42 : 0;

    return {
      x,
      y: centerY,
      scale: 0.78,
      rotateY: isLeft ? 16 : -16,
      opacity: sideOpacity,
      zIndex: abs === 1 ? 40 : 10,
    };
  };

  return (
    <section className="relative w-full py-16 overflow-hidden select-none">
      {/* Background + Gradient Overlay (matches Product Detail Page tabs section) */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${isGreen ? 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80' : 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80'})` }} />
      <div className={`absolute inset-0 bg-gradient-to-br ${isGreen ? 'from-[#0E588A]/95 via-[#1575B3]/90 to-[#083251]/90' : 'from-[#0E588A]/95 via-[#1575B3]/90 to-[#083251]/90'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-white">
              Featured Products
            </h2>
          </div>

          <p className={`text-xs sm:text-sm ${isGreen ? 'text-blue-100/80' : 'text-blue-100/80'} max-w-md font-light leading-relaxed`}>
            World-class piping and irrigation engineering, crafted for extreme durability, operational efficiency, and long-term reliability.
          </p>
        </div>

        {/* Product 3D Stacked Carousel Stage */}
        <div
          ref={stageRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full overflow-hidden touch-pan-y"
          style={{ height: stageLayout.cardH + 140, perspective: 1400 }}
        >
          {products.map((product, mapIndex) => {
            const offset = getOffset(mapIndex);
            const targets = getCardTargets(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={product.id}
                style={{ left: '50%', top: '50%', width: stageLayout.cardW, height: stageLayout.cardH }}
                initial={targets}
                animate={targets}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                className={`absolute overflow-hidden bg-white shadow-[0_30px_60px_rgba(2,30,53,0.35)] ${isCenter ? 'ring-1 ring-white/60' : ''}`}
              >
                <Link href={product.link} className="group relative block h-full w-full cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-white py-3.5 sm:py-4 px-4">
                    <h3 className="text-sm sm:text-base font-bold text-black leading-snug line-clamp-2 text-center">
                      {product.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Left / Right Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous product"
            className={`absolute top-1/2 -translate-y-1/2 left-3 sm:left-8 z-[60] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border border-white/40 text-white bg-white/10 hover:bg-white hover:text-[#015CAA] backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next product"
            className={`absolute top-1/2 -translate-y-1/2 right-3 sm:right-8 z-[60] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border border-white/40 text-white bg-white/10 hover:bg-white hover:text-[#015CAA] backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Explore All Products */}
        <div className="flex justify-center">
          <Link
            href={
              theme === 'green'
                ? '/irrigation-products'
                : '/pipe-products'
            }
            className={`inline-flex items-center gap-2 bg-white hover:bg-transparent  ${isGreen? 'text-[#015CAA] ':'text-[#015CAA]'} hover:text-white border border-white/60 hover:border-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group/btn`}
          > 
            <span>Explore All Products</span>
            <ArrowUpRight className={`w-4 h-4 ${isGreen ? 'text-[#015CAA] ':'text-[#015CAA]'} group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all`} />
          </Link> 
        </div>

      </div>
    </section>
  );
};