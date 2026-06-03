import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bridal' | 'hair' | 'skin' | 'nails'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { label: 'All Portfolio', id: 'all' },
    { label: 'Bridal Art', id: 'bridal' },
    { label: 'Hair Sculpting', id: 'hair' },
    { label: 'Skin glow', id: 'skin' },
    { label: 'Nail Lounge', id: 'nails' },
  ];

  const filteredItems = GALLERY_DATA.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const openLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_DATA.findIndex((g) => g.id === item.id);
    setLightboxIndex(originalIndex !== -1 ? originalIndex : 0);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    const total = GALLERY_DATA.length;
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex + direction + total) % total;
    });
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <motion.section
      id="gallery"
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
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-ivory/50 via-white to-ivory/50 overflow-hidden select-none"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-[-150px] w-96 h-96 bg-blush-pink/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-150px] w-96 h-96 bg-champagne/15 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-alt text-[0.7rem] tracking-[4px] uppercase text-rose-gold mb-3 flex items-center justify-center gap-3 w-full">
            <span className="h-[1px] w-8 bg-rose-gold" /> Our Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Beauty <span className="italic font-normal text-deep-burgundy">Portfolio</span>
          </h2>
          <p className="font-sans text-sm text-charcoal-light/80 mt-4 leading-relaxed">
            Witness the gorgeous, premium transformations crafted with utmost luxury on our real clients in Tamluk. Click any photo to view details.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none" id="gallery-category-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 focus:outline-none ${
                selectedCategory === cat.id
                  ? 'bg-deep-burgundy text-white shadow-md border border-deep-burgundy'
                  : 'bg-white hover:bg-ivory text-charcoal/70 border border-rose-gold/25'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="gallery-portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, scale: 1.01, boxShadow: '0 20px 40px rgba(107, 39, 55, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => openLightbox(item)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[500px] cursor-pointer border border-rose-gold/10 hover:border-rose-gold/40 transition-colors duration-300"
              >
                {/* Images */}
                <motion.img
                  src={item.imgUrl}
                  alt={item.title}
                  variants={{
                    hover: { scale: 1.08 }
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Hover Mask overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" id="gallery-overlay-mask">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    variants={{
                      hover: { scale: 1, opacity: 1 }
                    }}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-white hover:bg-rose-gold/20 hover:border-rose-gold transition-colors"
                  >
                    <ZoomIn className="w-4 h-4 animate-pulse" />
                  </motion.div>
                  <span className="font-alt text-[0.55rem] tracking-[2px] uppercase text-champagne mb-1">{item.category}</span>
                  <h3 className="font-serif text-lg text-white font-bold leading-tight mb-2">{item.title}</h3>
                  <p className="text-[10px] text-white/75 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal System */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark glass backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />

              {/* Lightbox Contents */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full flex flex-col items-center justify-center z-10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Main Image content */}
                <div className="relative aspect-[4/5] md:aspect-video w-full max-h-[70vh] rounded-2xl overflow-hidden border border-rose-gold/25 shadow-2xl bg-black flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={lightboxIndex}
                      initial={{ scale: 0.93, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.05, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      src={GALLERY_DATA[lightboxIndex].imgUrl}
                      alt={GALLERY_DATA[lightboxIndex].title}
                      className="w-full h-full object-contain pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>

                  {/* Left arrow controls */}
                  <button
                    onClick={() => navigateLightbox(-1)}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center transition-all focus:outline-none active:scale-90 hover:scale-105 z-20"
                    aria-label="Previous portfolio image"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Right arrow controls */}
                  <button
                    onClick={() => navigateLightbox(1)}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center transition-all focus:outline-none active:scale-90 hover:scale-105 z-20"
                    aria-label="Next portfolio image"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Built-in close button inside overlay frame for extreme convenience on mobile */}
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center focus:outline-none transition-all active:scale-95"
                    aria-label="Close image viewer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Lightbox Caption block */}
                <div className="w-full text-center mt-6 text-white max-w-2xl px-4">
                  <span className="font-alt text-[0.55rem] tracking-[3px] uppercase text-rose-gold block mb-2">
                    {GALLERY_DATA[lightboxIndex].category} Look
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-2 text-champagne">
                    {GALLERY_DATA[lightboxIndex].title}
                  </h4>
                  <p className="text-xs sm:text-sm font-sans text-white/70 font-light leading-relaxed">
                    {GALLERY_DATA[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </motion.section>
  );
}
