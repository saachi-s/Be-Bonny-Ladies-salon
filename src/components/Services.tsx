import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export default function Services({ onOpenBookingWithService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'makeup' | 'hair' | 'skin' | 'nails' | 'other'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { label: 'All', id: 'all' },
    { label: 'Makeup Artistry', id: 'makeup' },
    { label: 'Hair Care', id: 'hair' },
    { label: 'Skin Glow', id: 'skin' },
    { label: 'Nail Lounge', id: 'nails' },
    { label: 'Grooming & More', id: 'other' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.section
      id="services"
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
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white via-ivory/30 to-white overflow-hidden select-none"
    >
      {/* Decorative blurry backgrounds */}
      <div className="absolute top-1/4 left-[-150px] w-96 h-96 bg-champagne/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/8 right-[-150px] w-96 h-96 bg-blush-pink/20 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-alt text-[0.7rem] tracking-[4px] uppercase text-rose-gold mb-3 flex items-center justify-center gap-3 w-full">
            <span className="h-[1px] w-8 bg-rose-gold" /> Our Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Luxury <span className="italic font-normal text-deep-burgundy">Salon Services</span>
          </h2>
          <p className="font-sans text-sm text-charcoal-light/80 mt-4 leading-relaxed">
            Discover our comprehensive range of high-end beauty rituals, custom-tailored in Tamluk for matchless elegance and complete rejuvenation.
          </p>
        </div>

        {/* Searching & Filtering Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12" id="services-search-filter-container">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-xs" id="services-search-wrapper">
            <input
              type="text"
              placeholder="Search salon services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-rose-gold/30 bg-white text-sm text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/15 transition-all shadow-sm"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-charcoal/40 hover:text-charcoal-light focus:outline-none"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filtering Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none" id="services-tabs-bar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as any);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 focus:outline-none ${
                  activeCategory === tab.id
                    ? 'bg-deep-burgundy text-white shadow-md shadow-deep-burgundy/10 border border-deep-burgundy'
                    : 'bg-white hover:bg-ivory text-charcoal/70 border border-rose-gold/25'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8" id="services-cards-grid">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((srv, i) => (
              <motion.div
                key={srv.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-rose-gold/10 hover:border-rose-gold/30 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Active Hover Background Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-burgundy to-[#491621] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl -z-10" />

                <div>
                  {/* Service Image Frame */}
                  {srv.imgUrl && (
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5">
                      <img
                        src={srv.imgUrl}
                        alt={srv.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {/* Floating Category Icon Badge */}
                      <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-lg shadow-md border border-rose-gold/20">
                        {srv.icon}
                      </div>
                    </div>
                  )}

                  {!srv.imgUrl && (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blush-pink to-champagne/20 flex items-center justify-center mb-5 group-hover:bg-white/10 group-hover:from-transparent group-hover:to-transparent transition-all duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{srv.icon}</span>
                    </div>
                  )}

                  {/* Title & Desc */}
                  <h3 className="font-serif text-lg font-bold text-deep-burgundy group-hover:text-white transition-colors duration-300 mb-2">
                    {srv.name}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-light/90 group-hover:text-white/80 transition-colors duration-300 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-rose-gold/15 group-hover:border-white/10 transition-colors duration-300">
                  {/* Price Estimate */}
                  <span className="font-alt text-[0.65rem] tracking-[1.5px] uppercase font-bold text-rose-gold group-hover:text-champagne transition-colors duration-300">
                    {srv.priceEstimate}
                  </span>

                  {/* Booking Trigger */}
                  <button
                    onClick={() => onOpenBookingWithService(srv.name)}
                    className="flex items-center gap-1.5 font-alt text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider text-charcoal bg-rose-gold/20 hover:bg-rose-gold text-deep-burgundy hover:text-charcoal px-3.5 py-2 rounded-full duration-300 group-hover:bg-white group-hover:text-deep-burgundy focus:outline-none"
                  >
                    Select <Sparkles className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state when no service matches searches */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
            id="services-empty-state"
          >
            <p className="text-sm text-charcoal/50 font-medium">No beauty services matched your current query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-6 py-2.5 bg-white border border-rose-gold/30 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-ivory text-rose-gold focus:outline-none"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

      </div>
    </motion.section>
  );
}
