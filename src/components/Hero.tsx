import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { IMAGES } from '../data';
import homeBgImg from '../assets/images/home_bg_texture_1780427052790.png';

interface HeroProps {
  onOpenBooking: () => void;
}

const SLIDESHOW_IMAGES = [
  homeBgImg,
  IMAGES.heroBridal,
  IMAGES.aboutSalon,
  IMAGES.galleryHair,
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200', // Luxury calm spa
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200'  // Premium salon stations
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload slideshow images to ensure perfectly smooth transitions without flashes
  useEffect(() => {
    SLIDESHOW_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 6000); // 6 seconds display time
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1d0e12] via-deep-burgundy to-charcoal-light text-white overflow-hidden py-24 px-6 md:px-12 select-none"
    >
      {/* Background Image Slideshow Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden bg-[#12070a]">
        {SLIDESHOW_IMAGES.map((img, index) => (
          <motion.img
            key={img}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ 
              opacity: index === currentSlide ? 0.45 : 0,
              scale: index === currentSlide ? 1.02 : 1.15,
            }}
            transition={{ 
              opacity: { duration: 2.2, ease: "easeInOut" },
              scale: { duration: 6.5, ease: "easeOut" }
            }}
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        ))}
        {/* Overlay gradient to keep high-contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d0e12]/85 via-[#1d0e12]/40 to-black/90" />
      </div>

      {/* Background decoration elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(214,163,115,0.15)_0%,transparent_60%)] z-0" />
      
      {/* Decorative Rotating Circles */}
      <div className="absolute -top-24 -right-24 w-[550px] h-[550px] border border-rose-gold/15 rounded-full pointer-events-none animate-[spin_50s_linear_infinite]" />
      <div className="absolute top-12 right-12 w-[350px] h-[350px] border border-rose-gold/10 rounded-full pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
      
      {/* Slideshow Indicator Dots - Floating Left Side */}
      <div className="absolute left-6 md:left-12 bottom-6 z-20 flex items-center gap-2" id="slideshow-controls">
        {SLIDESHOW_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="focus:outline-none transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span 
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-rose-gold' : 'w-2 bg-white/30 hover:bg-white/60'
              }`} 
            />
          </button>
        ))}
      </div>

      {/* Centered container with responsive desktop grids */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left column text controls */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-rose-gold/30 backdrop-blur-md mb-6 shadow-md"
            id="hero-verified-badge"
          >
            <div className="flex text-yellow-400 gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="font-alt text-[0.65rem] tracking-[1.5px] uppercase text-champagne font-semibold">
              121 Happy Clients · 4.9-Star Rated
            </span>
          </motion.div>

          {/* Master Headings */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            id="hero-main-title"
          >
            Beauty <span className="font-sub font-normal italic text-champagne bg-gradient-to-r from-champagne via-rose-gold to-blush-pink bg-clip-text text-transparent bg-[length:200%_auto] animate-[pulse_4s_ease_infinite]">Beyond</span>
            <br />
            Expectations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-sm md:text-base font-light text-blush-pink/80 leading-relaxed max-w-xl mb-8"
            id="hero-subphrase"
          >
            <strong>Be Bonny Ladies salon</strong> – Experience a realm of utmost prestige, artistry, and confidence in Tamluk. Indulge in award-winning bridal transformations and premium pampering.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            id="hero-action-buttons-group"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-gradient-to-r from-rose-gold to-champagne hover:scale-[1.03] active:scale-95 duration-200 text-charcoal font-semibold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-rose-gold/20 flex items-center justify-center gap-2 focus:outline-none"
            >
              <Sparkles className="w-4 h-4" /> Book Appointment
            </button>
            <a
              href="#services"
              className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/10 text-white hover:text-rose-gold duration-200 text-xs font-semibold uppercase tracking-wider rounded-full flex items-center justify-center gap-1.5 focus:outline-none"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Lower Statistics Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex items-center gap-8 md:gap-12 mt-10 pt-8 border-t border-white/10 w-full"
            id="hero-stats-row"
          >
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-champagne">121</span>
              <span className="font-alt text-[0.6rem] tracking-[2px] uppercase text-white/50 mt-1">Happy Reviews</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-champagne">4.9 ★</span>
              <span className="font-alt text-[0.6rem] tracking-[2px] uppercase text-white/50 mt-1">Star Rating</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-champagne">15+</span>
              <span className="font-alt text-[0.6rem] tracking-[2px] uppercase text-white/50 mt-1">Services</span>
            </div>
          </motion.div>
        </div>

        {/* Right column graphic and float elements - responsive for mobile as well */}
        <div className="col-span-1 lg:col-span-5 flex items-center justify-center relative select-none mt-12 lg:mt-0" id="hero-graphic-col">
          {/* Framed Blob/Liquid Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[260px] sm:w-[320px] xl:w-[380px] aspect-[4/5] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden border border-rose-gold/30 shadow-2xl bg-gradient-to-br from-rose-gold/20 to-deep-burgundy/60 animate-[pulse_8s_ease-in-out_infinite_alternate]"
            id="hero-portrait-blob"
          >
            <img
              src={IMAGES.heroBridal}
              alt="Beautiful Bengali Bridal Makeup Artist Look"
              className="w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Floating glass badge 1 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: infiniteScrollAnimationRange, ease: 'easeInOut' }}
            className="absolute -bottom-4 left-[2%] sm:left-[-10px] bg-[#1d0e12]/80 backdrop-blur-md border border-rose-gold/30 rounded-2xl p-3 sm:p-4 shadow-lg flex flex-col text-left z-10 scale-90 sm:scale-100"
            id="floating-badge-bottom"
          >
            <span className="font-alt text-[0.5rem] sm:text-[0.55rem] tracking-[1.5px] uppercase text-white/70 mb-0.5">Specialty</span>
            <span className="font-serif text-xs sm:text-sm font-semibold text-champagne whitespace-nowrap">Bridal Makeup ✨</span>
          </motion.div>

          {/* Floating glass badge 2 */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, delay: 2, repeat: infiniteScrollAnimationRange, ease: 'easeInOut' }}
            className="absolute top-12 right-[2%] sm:right-[-8px] bg-[#1d0e12]/80 backdrop-blur-md border border-rose-gold/30 rounded-2xl p-3 sm:p-4 shadow-lg flex flex-col text-left z-10 scale-90 sm:scale-100"
            id="floating-badge-top"
          >
            <span className="font-alt text-[0.5rem] sm:text-[0.55rem] tracking-[1.5px] uppercase text-white/70 mb-0.5">Our Rating</span>
            <span className="font-serif text-xs sm:text-sm font-medium text-champagne whitespace-nowrap">★★★★★ 4.9</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// Fixed repeat value for infinite scrolling animation
const infiniteScrollAnimationRange = Infinity;
export { infiniteScrollAnimationRange };
