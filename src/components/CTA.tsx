import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, PhoneCall } from 'lucide-react';

interface CTAProps {
  onOpenBooking: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        }
      }}
      className="relative bg-gradient-to-br from-[#3b121c] via-deep-burgundy to-charcoal py-24 px-6 md:px-12 text-center text-white overflow-hidden select-none"
    >
      {/* Dynamic pulsating ripple waves from raw HTML mockup */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-rose-gold rounded-full animate-[ping_4s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-rose-gold rounded-full animate-[ping_4s_linear_infinite_1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-rose-gold rounded-full animate-[ping_4s_linear_infinite_2s]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-20">
        <span className="font-alt text-[0.7rem] tracking-[4px] uppercase text-champagne block mb-4">✦ Start Your Journey ✦</span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
          Ready for Your Beauty <span className="italic font-normal text-champagne">Transformation?</span>
        </h2>
        <p className="font-sans text-xs sm:text-sm font-light text-blush-pink/80 leading-relaxed mb-10 max-w-xl mx-auto">
          Let our expert stylists and cosmetologists at Be Bonny sculpt the perfect aesthetic look just for you. Get ready to experience world-class salon luxury in Tamluk.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-gold to-champagne hover:scale-[1.03] active:scale-95 duration-200 text-charcoal font-semibold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-champagne/10 flex items-center justify-center gap-2 focus:outline-none"
            id="cta-booking-btn"
          >
            <Sparkles className="w-4 h-4" /> Book Appointment
          </button>
          <a
            href="tel:+918617358372"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 backdrop-blur-sm hover:bg-white/10 text-white hover:text-champagne font-semibold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 focus:outline-none"
          >
            <PhoneCall className="w-3.5 h-3.5" /> Call +91 86173 58372
          </a>
        </div>
      </div>
    </motion.section>
  );
}
