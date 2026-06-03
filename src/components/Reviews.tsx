import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Reviews() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Dynamically recalculate cards in view based on width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = TESTIMONIALS_DATA.length;
  const maxSlideIndex = Math.max(0, totalSlides - visibleCount);

  const prevSlide = () => {
    setSlideIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setSlideIndex((prev) => {
      if (prev >= maxSlideIndex) return 0; // wrap around
      return prev + 1;
    });
  };

  return (
    <motion.section
      id="reviews"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        }
      }}
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white via-blush-pink/5 to-white overflow-hidden select-none"
    >
      {/* Decorative blurred backdrops */}
      <div className="absolute top-12 left-1/4 w-80 h-80 bg-blush-pink/15 rounded-full filter blur-[90px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-champagne/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-20">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="font-alt text-[0.7rem] tracking-[4px] uppercase text-rose-gold mb-3 flex items-center justify-center gap-3 w-full">
            <span className="h-[1px] w-8 bg-rose-gold" /> Happy Clients
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            What Our <span className="italic font-normal text-deep-burgundy">Clients Say</span>
          </h2>

          {/* Average Rating Block */}
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white border border-rose-gold/20 shadow-sm mt-6 mb-2">
            <span className="text-yellow-400 text-lg sm:text-xl font-bold tracking-[3px]">★★★★★</span>
            <div className="h-5 w-[1px] bg-rose-gold/30" />
            <div className="text-left leading-none flex flex-col justify-center">
              <span className="font-serif text-lg font-bold text-deep-burgundy">4.9 / 5</span>
              <span className="text-[9px] uppercase tracking-wider text-charcoal/50 mt-1 font-semibold">121 Verified Ratings</span>
            </div>
          </div>
        </div>

        {/* Carousel Tracks */}
        <div className="relative overflow-hidden px-2 py-4">
          <motion.div 
            className="flex gap-6 duration-300"
            animate={{ x: `calc(-${slideIndex * (100 / visibleCount)}% - ${slideIndex * (24 / visibleCount)}px)` }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-rose-gold/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm select-none"
                style={{
                  minWidth: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                  maxWidth: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                }}
              >
                {/* Gold Stars */}
                <div className="text-yellow-400 text-sm tracking-[2px] mb-4 text-left">
                  {Array.from({ length: t.rating }).map((_, idx) => '★')}
                </div>

                {/* Review Text */}
                <p className="font-serif italic text-sm md:text-base leading-relaxed text-charcoal/90 text-left mb-6 flex-grow">
                  “{t.text}”
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-rose-gold/15 mb-4" />

                {/* Reviewer Details */}
                <div className="flex items-center gap-3 text-left">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-deep-burgundy to-[#491621] text-white flex items-center justify-center font-serif text-lg font-bold shadow-md">
                    {t.avatarChar}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold text-deep-burgundy">{t.name}</span>
                    <span className="text-[10px] text-charcoal-light/60 mt-0.5">{t.role} · {t.date}</span>
                    <div className="flex items-center gap-1 text-[9px] text-emerald-600 font-semibold uppercase tracking-wider mt-1">
                      <CheckCircle2 className="w-3 h-3 fill-current text-white" /> Verified Client
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            disabled={slideIndex === 0}
            className={`w-12 h-12 rounded-full border flex items-center justify-center focus:outline-none transition-all duration-300 ${
              slideIndex === 0
                ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-transparent'
                : 'border-rose-gold/40 text-rose-gold hover:bg-deep-burgundy hover:border-deep-burgundy hover:text-white shadow-sm'
            }`}
            aria-label="Scroll testimonials backward"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={slideIndex >= maxSlideIndex}
            className={`w-12 h-12 rounded-full border flex items-center justify-center focus:outline-none transition-all duration-300 ${
              slideIndex >= maxSlideIndex
                ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-transparent'
                : 'border-rose-gold/40 text-rose-gold hover:bg-deep-burgundy hover:border-deep-burgundy hover:text-white shadow-sm'
            }`}
            aria-label="Scroll testimonials forward"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </motion.section>
  );
}
export { Reviews };
