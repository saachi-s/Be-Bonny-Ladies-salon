import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Star, Route, Compass } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      title: 'Our Address',
      content: 'North, Padumbasan, Ram sagar pukur, parh, Tamluk, West Bengal 721636',
      icon: <MapPin className="w-5 h-5 text-deep-burgundy" />,
    },
    {
      title: 'Phone Number',
      content: '+91 86173 58372',
      subtext: 'Call or WhatsApp us anytime',
      href: 'tel:+918617358372',
      icon: <Phone className="w-5 h-5 text-deep-burgundy" />,
    },
    {
      title: 'Client Reviews',
      content: '★★★★★ 4.9 Rating · 121 Reviews',
      subtext: '99% Positive Feedback',
      icon: <Star className="w-5 h-5 text-deep-burgundy" />,
    },
  ];

  return (
    <motion.section
      id="contact"
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
      {/* Background Graphic elements */}
      <div className="absolute top-1/4 right-[-150px] w-96 h-96 bg-blush-pink/15 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-alt text-[0.7rem] tracking-[4px] uppercase text-rose-gold mb-3 flex items-center justify-center gap-3 w-full">
            <span className="h-[1px] w-8 bg-rose-gold" /> Find Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Visit <span className="italic font-normal text-deep-burgundy">Be Bonny</span>
          </h2>
          <p className="font-sans text-sm text-charcoal-light/80 mt-4 leading-relaxed">
            We are excited to welcome you to our professional salon sanctuary in Tamluk. Come and let us craft your ultimate dream look.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Cards Index */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left" id="contact-details-column">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-rose-gold/10 hover:border-rose-gold/30 shadow-sm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blush-pink to-champagne/20 flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-serif text-sm font-semibold text-deep-burgundy leading-snug mb-1">{info.title}</h4>
                  {info.href ? (
                    <a href={info.href} className="text-xs text-charcoal hover:text-rose-gold transition-colors font-medium">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-xs text-charcoal/80 leading-normal">{info.content}</p>
                  )}
                  {info.subtext && <p className="text-[10px] text-charcoal-light/60 mt-1 leading-normal">{info.subtext}</p>}
                </div>
              </div>
            ))}

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4" id="contact-action-chips">
              <a
                href="tel:+918617358372"
                className="px-6 py-3.5 bg-gradient-to-br from-deep-burgundy to-[#491621] hover:opacity-95 text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5 focus:outline-none"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="https://wa.me/918617358372?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20Be%20Bonny%20services."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5 focus:outline-none"
              >
                💬 WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/6YpQqNQHPzQVSoCF7"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-white border-2 border-deep-burgundy/15 hover:bg-deep-burgundy hover:border-deep-burgundy hover:text-white text-deep-burgundy font-semibold text-xs uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1.5 transition-all duration-300 focus:outline-none"
              >
                <Route className="w-3.5 h-3.5" /> Directions Map
              </a>
            </div>
          </div>

          {/* Right Column: Map Embed */}
          <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden border border-rose-gold/25 shadow-lg relative bg-white" id="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14743.714249117365!2d87.91578278715822!3d22.4411132958983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f3bb44ca94b3%3A0xe5452f1eebd1a851!2sTamluk%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1717351659972!5m2!1sen!2sin"
              className="w-full h-full border-none"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Be Bonny Ladies salon Location on Google Maps - Tamluk"
            />
            {/* Minimal floating navigation card over iframe mapping */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-rose-gold/20 rounded-xl p-3 shadow-md flex items-center gap-2 max-w-[200px] pointer-events-none select-none">
              <Compass className="w-5 h-5 text-deep-burgundy animate-spin" style={{ animationDuration: '4s' }} />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-deep-burgundy leading-tight">Tamluk, West Bengal</span>
                <span className="text-[8px] text-charcoal/60 leading-none mt-0.5">North Padumbasan Area</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
