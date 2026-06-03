import React from 'react';
import { Home, Compass, PhoneCall } from 'lucide-react';

export default function Footer() {
  const socialMedias = [
    { title: 'Facebook', value: 'f', href: '#' },
    { title: 'Instagram', value: '📷', href: 'https://instagram.com/be_bonny_ladies_salon' },
    { title: 'WhatsApp', value: '💬', href: 'https://wa.me/918617358372' },
    { title: 'Call Us', value: '📞', href: 'tel:+918617358372' },
  ];

  const quickServices = [
    { name: 'Bridal Makeup Artistry', href: '#services' },
    { name: 'HD & Airbrush Makeup', href: '#services' },
    { name: 'Intricate Hair Sculpting', href: '#services' },
    { name: 'Deep Nourishing Hair Spa', href: '#services' },
    { name: 'Whitening Skin Facials', href: '#services' },
    { name: 'Manicure & Pedicure Lounge', href: '#services' },
  ];

  const quickLinks = [
    { name: 'Home Landing', href: '#home' },
    { name: 'Our Backstory', href: '#about' },
    { name: 'Service Catalogue', href: '#services' },
    { name: 'Real Transformations', href: '#gallery' },
    { name: 'Customer Testimonials', href: '#reviews' },
    { name: 'Get In Touch', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#17090d] via-deep-burgundy to-charcoal text-white/50 pt-20 pb-8 px-6 md:px-12 border-t border-rose-gold/10 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/5 text-left select-none">
        
        {/* Footbrand */}
        <div className="flex flex-col select-none" id="footer-brand-column">
          <div className="logo font-serif text-2xl font-extrabold tracking-[2px] text-rose-gold">Be Bonny</div>
          <span className="font-alt text-[0.6rem] tracking-[4px] uppercase text-champagne mt-1.5 mb-6">Be Bonny Ladies salon</span>
          <p className="text-xs font-light text-white/60 leading-relaxed mb-6">
            Your trusted, premier beauty parlour sanctuary for bridal transformation and ultimate salon beauty in the heart of Tamluk. Celebrating your unique radiance.
          </p>
          <div className="flex items-center gap-3">
            {socialMedias.map((social) => (
              <a
                key={social.title}
                href={social.href}
                className="w-9 h-9 rounded-xl border border-rose-gold/30 hover:border-rose-gold flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-charcoal duration-200 text-sm focus:outline-none"
                aria-label={social.title}
              >
                {social.value}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Popular Treatments */}
        <div className="flex flex-col" id="footer-services-column">
          <h4 className="font-serif text-sm font-semibold tracking-wide text-white mb-6 pr-4 relative after:absolute after:bottom-[-8px] after:left-0 after:w-6 after:h-[2px] after:bg-rose-gold">Popular Services</h4>
          <ul className="space-y-3">
            {quickServices.map((srv) => (
              <li key={srv.name}>
                <a
                  href={srv.href}
                  className="text-xs hover:text-champagne transition-colors duration-200 flex items-center gap-1.5 text-white/60"
                >
                  <span className="text-rose-gold">›</span> {srv.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col" id="footer-links-column">
          <h4 className="font-serif text-sm font-semibold tracking-wide text-white mb-6 pr-4 relative after:absolute after:bottom-[-8px] after:left-0 after:w-6 after:h-[2px] after:bg-rose-gold">Quick Navigation</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs hover:text-champagne transition-colors duration-200 flex items-center gap-1.5 text-white/60"
                >
                  <span className="text-rose-gold">›</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Location Address */}
        <div className="flex flex-col select-none" id="footer-contact-column">
          <h4 className="font-serif text-sm font-semibold tracking-wide text-white mb-6 pr-4 relative after:absolute after:bottom-[-8px] after:left-0 after:w-6 after:h-[2px] after:bg-rose-gold">Our Coordinates</h4>
          
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start gap-3 text-xs leading-relaxed text-white/60">
              <span className="text-rose-gold mt-0.5 text-sm">📍</span>
              <span>North, Padumbasan, Ram sagar pukur, parh, Tamluk, West Bengal 721636</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-xs leading-relaxed text-white/60">
              <span className="text-rose-gold text-sm">📞</span>
              <a href="tel:+918617358372" className="hover:text-champagne transition-colors font-medium text-white/70">
                +91 86173 58372
              </a>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-3 text-xs leading-relaxed text-white/60">
              <span className="text-rose-gold text-sm">⭐</span>
              <span>★★★★★ 4.9 Rating · 121 Reviews</span>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3 text-xs leading-relaxed text-white/60">
              <span className="text-rose-gold text-sm">🕒</span>
              <span>Open Daily · 09:00 AM – 08:00 PM</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom Block */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 select-none">
        <p className="text-[10px] sm:text-xs text-white/30 text-center select-none">
          © 2026 <a href="#home" className="text-rose-gold hover:underline">Be Bonny Ladies salon</a>. All Rights Reserved. Crafted with care.
        </p>
        <div className="flex items-center space-x-6 text-[10px] sm:text-xs text-white/30" id="footer-bottom-links">
          <a href="#" className="hover:text-rose-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-rose-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-rose-gold transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
