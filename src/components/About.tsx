import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { IMAGES } from '../data';

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const features = [
    {
      title: 'Expert Professionals',
      desc: 'Trained, certified, and passionate beauty artists who understand modern styles.',
      icon: <Award className="w-5 h-5 text-deep-burgundy" />,
    },
    {
      title: 'Premium Products Only',
      desc: 'We strictly work with global, premium skin and makeup brands to protect your glow.',
      icon: <Sparkles className="w-5 h-5 text-deep-burgundy" />,
    },
    {
      title: 'Personalized Care',
      desc: 'Every face and hair is different. We tailor our services to magnify your uniqueness.',
      icon: <Heart className="w-5 h-5 text-deep-burgundy" />,
    },
    {
      title: 'Hygienic Standards',
      desc: 'Clean, sanitized, and deeply comfortable environment with the highest safety.',
      icon: <ShieldCheck className="w-5 h-5 text-deep-burgundy" />,
    },
  ];

  return (
    <motion.section
      id="about"
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
      {/* Background aurora shapes */}
      <div className="absolute top-0 right-[-100px] w-96 h-96 bg-blush-pink/15 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Side-Frame Graphics */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Main Photo Card */}
          <div
            className="relative w-full max-w-[340px] aspect-[4/5] rounded-[60%_40%_40%_60%_/_50%_50%_50%_50%] overflow-hidden shadow-xl border border-rose-gold/20"
            id="about-main-image-wrapper"
          >
            <img
              src={IMAGES.aboutSalon}
              alt="Inside Be Bonny Premium Beauty Parlour - Tamluk"
              className="w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floater overlay badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[-20px] right-2 md:right-[-20px] w-[150px] aspect-square rounded-full bg-gradient-to-br from-deep-burgundy to-[#491621] border border-rose-gold/30 shadow-xl flex flex-col items-center justify-center text-center p-4"
            id="about-floating-badge"
          >
            <span className="font-serif text-3xl font-extrabold text-white">5★</span>
            <span className="font-alt text-[0.55rem] tracking-[2px] uppercase text-champagne mt-1.5 leading-tight">
              Rated<br />Salon
            </span>
          </motion.div>
        </div>

        {/* Right Column: Descriptions & Custom Bullet Features */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="font-alt text-[0.7rem] tracking-[4px] uppercase text-rose-gold mb-3 flex items-center gap-3 w-full">
            <span className="h-[1px] w-8 bg-rose-gold inline-block" /> Our Story
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Where Beauty Meets <span className="italic font-normal text-deep-burgundy">Artistry</span>
          </h2>

          <p className="font-sans text-sm text-charcoal-light/90 leading-relaxed mb-6">
            Welcome to <strong>Be Bonny Ladies salon</strong>, Tamluk’s leading sanctuary for beauty and timeless elegance. We are a passionate team of highly qualified, certified beauty technicians dedicated to helping you discover and project your ultimate power—whether on your wedding day, a special banquet, or during a simple, well-deserved self-care session.
          </p>

          <p className="font-sans text-sm text-charcoal-light/90 leading-relaxed mb-8">
            From the moment you step into our calm, fragrant space, you are welcomed with personalized hospitality and professional consultation. We believe beauty is a natural expression, and we are here to sculpt, highlight, and elevate yours with the utmost precision.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8" id="about-features-grid">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 p-4 rounded-2xl border border-rose-gold/10 bg-gradient-to-br from-white to-ivory/20 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush-pink to-champagne/30 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-alt text-xs font-semibold text-deep-burgundy tracking-wide uppercase">{feature.title}</h4>
                  <p className="text-[11px] text-charcoal-light/80 mt-1 leading-normal">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-gradient-to-r from-deep-burgundy to-rose-gold text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-lg transition-transform focus:outline-none hover:-translate-y-0.5"
            id="about-cta-btn"
          >
            Discover More →
          </button>
        </div>
      </div>
    </motion.section>
  );
}
