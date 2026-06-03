import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Gem, Users, Smile, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: 'Certified Stylists',
      desc: 'Our team is trained by professional makeup academies. We stay up-to-date with international beauty trends to give you the most flawless look.',
      icon: <Users className="w-6 h-6 text-rose-gold" />,
    },
    {
      title: 'Premium Brands Only',
      desc: 'We strictly avoid low-cost replica products. When you get makeup or hair therapies at Be Bonny, only authenticated dermatologically-tested brands touch your skin.',
      icon: <Gem className="w-6 h-6 text-rose-gold" />,
    },
    {
      title: 'Customized Routines',
      desc: 'No cookie-cutter looks. We evaluate your unique skin tones, face geometry, and outfit layouts to customize an individual hair and makeup scheme.',
      icon: <Heart className="w-6 h-6 text-rose-gold" />,
    },
    {
      title: 'Obsessive Hygiene',
      desc: 'We sanitize our makeup brushes, salon chairs, hair accessories, and workspace tools between each and every client. Your health and comfort is our highest priority.',
      icon: <ShieldCheck className="w-6 h-6 text-rose-gold" />,
    },
    {
      title: 'Affordable Indulgence',
      desc: 'We believe world-class beauty services shouldn\'t require extreme budgets. We offer genuine, fair, and highly transparent pricing tiers across all services.',
      icon: <Smile className="w-6 h-6 text-rose-gold" />,
    },
    {
      title: 'Loved By The Community',
      desc: 'With 121 verified 4.9-star customer reviews, we stand proudly as the most trusted beauty parlour in Tamluk. Our verified track record speaks for itself.',
      icon: <Star className="w-6 h-6 text-rose-gold fill-rose-gold/10" />,
    },
  ];

  return (
    <motion.section
      id="why"
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
      className="relative py-24 px-6 md:px-12 bg-ivory overflow-hidden select-none"
    >
      {/* Background graphic accents */}
      <div className="absolute top-1/2 left-[-150px] w-96 h-96 bg-champagne/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blush-pink/15 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-alt text-[0.7rem] tracking-[4px] uppercase text-rose-gold mb-3 flex items-center justify-center gap-3 w-full">
            <span className="h-[1px] w-8 bg-rose-gold" /> Why Be Bonny
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            The <span className="italic font-normal text-deep-burgundy">Be Bonny Difference</span>
          </h2>
          <p className="font-sans text-sm text-charcoal-light/80 mt-4 leading-relaxed">
            True excellence represents more than just salon treatment. It is about a consistent, professional lifestyle designed with pristine attention.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="why-choose-us-grid">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="relative group bg-white border border-rose-gold/10 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              id={`why-card-${i}`}
            >
              {/* Card visual accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose-gold to-champagne scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon Frame */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blush-pink to-champagne/20 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-deep-burgundy group-hover:to-[#491621] transition-all duration-300">
                <span className="group-hover:text-white transition-colors duration-300">{pillar.icon}</span>
              </div>

              {/* Text */}
              <h3 className="font-serif text-base font-bold text-deep-burgundy mb-3">{pillar.title}</h3>
              <p className="font-sans text-xs text-charcoal-light/90 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
export { WhyChooseUs };
