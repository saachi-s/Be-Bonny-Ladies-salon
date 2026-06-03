import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Our Services', href: '#services' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'Why Us', href: '#why' },
    { title: 'Testimonials', href: '#reviews' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/97 backdrop-blur-md shadow-md py-3 border-b border-rose-gold/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand Brand */}
          <a href="#home" className="flex flex-col group select-none focus:outline-none">
            <span
              className={`font-serif text-xl md:text-2xl font-bold tracking-[2px] transition-colors ${
                isScrolled ? 'text-deep-burgundy' : 'text-rose-gold'
              }`}
            >
              Be Bonny
            </span>
            <span className="font-alt text-[0.55rem] tracking-[4px] uppercase text-champagne group-hover:text-rose-gold transition-colors mt-0.5">
              Be Bonny Ladies salon
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`font-alt text-[0.7rem] font-medium tracking-[2px] uppercase select-none transition-colors duration-200 relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-rose-gold after:scale-x-0 after:transition-transform hover:after:scale-x-100 ${
                  isScrolled ? 'text-charcoal hover:text-deep-burgundy' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.title}
              </a>
            ))}

            {/* CTA action in header */}
            <button
              onClick={onOpenBooking}
              className="bg-gradient-to-r from-rose-gold to-champagne hover:scale-[1.03] active:scale-95 duration-200 text-charcoal px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[1px] shadow-md select-none focus:outline-none"
              id="header-booking-btn"
            >
              Book Now
            </button>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg bg-transparent transition-colors focus:outline-none ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}
            aria-label="Open mobile menu"
            id="mobile-menu-trigger"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ivory flex flex-col justify-center items-center transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
        id="mobile-menu-drawer"
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-charcoal/5 text-charcoal focus:outline-none"
          id="close-mobile-menu-btn"
          aria-label="Close mobile menu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand */}
        <div className="absolute top-6 left-6 flex flex-col">
          <span className="font-serif text-lg font-bold tracking-[2px] text-deep-burgundy">Be Bonny</span>
          <span className="font-alt text-[0.6rem] tracking-[3px] uppercase text-rose-gold">Ladies Salon</span>
        </div>

        {/* Navigation Links inside Drawer */}
        <div className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-charcoal hover:text-deep-burgundy italic transition-colors font-medium select-none"
            >
              {link.title}
            </a>
          ))}

          {/* Booking Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-4 px-8 py-3.5 bg-gradient-to-r from-deep-burgundy to-rose-gold text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-1.5 focus:outline-none"
            id="mobile-drawer-book-btn"
          >
            <Sparkles className="w-4 h-4" /> Book Appointment
          </button>
        </div>
      </div>
    </>
  );
}
