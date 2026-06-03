import React, { useState, useEffect } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import CustomCursor from './components/CustomCursor';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServicePreset, setBookingServicePreset] = useState('');
  const [showToTop, setShowToTop] = useState(false);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Standard toggle to open booking modal with no prefilled service
  const handleOpenGeneralBooking = () => {
    setBookingServicePreset('');
    setIsBookingOpen(true);
  };

  // Open booking modal prefilled with specific service clicked from the catalog
  const handleOpenBookingWithService = (serviceName: string) => {
    setBookingServicePreset(serviceName);
    setIsBookingOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-ivory text-charcoal font-sans antialiased selection:bg-rose-gold/30 selection:text-deep-burgundy scroll-smooth">
      {/* 0. Custom elegant luxury brand cursor follower */}
      <CustomCursor />

      {/* 1. Global Background, Aurora Blobs, Grain, Falling Petals */}
      <BackgroundEffects />

      {/* 2. Header and Navigation Drawer */}
      <Header onOpenBooking={handleOpenGeneralBooking} />

      {/* 3. Hero Visual Entrance Section */}
      <Hero onOpenBooking={handleOpenGeneralBooking} />

      {/* 4. "Our Story" & Brand Pillars */}
      <About onOpenBooking={handleOpenGeneralBooking} />

      {/* 5. Luxury Treatments Grid with Filter Tabs & Search */}
      <Services onOpenBookingWithService={handleOpenBookingWithService} />

      {/* 6. Asymmetrical Why Choose Us Core Columns */}
      <WhyChooseUs />

      {/* 7. Gallery Portfolio Showcase & Immersive Lightbox */}
      <Gallery />

      {/* 8. Running Counter Numerical Stats Banner */}
      <Stats />

      {/* 9. Reviews Slider Carousel */}
      <Reviews />

      {/* 10. Sunset Pulse Waves Call-To-Action */}
      <CTA onOpenBooking={handleOpenGeneralBooking} />

      {/* 11. Contact Info & Interactive Maps Frame */}
      <Contact />

      {/* 12. Full Directory Footer Layout */}
      <Footer />

      {/* 13. Dynamic WhatsApp Booking Modal (Preset-aware) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedServicePreset={bookingServicePreset}
      />

      {/* 14. Floating Sticky Actions Emojis */}
      {/* WhatsApp Chat Launcher */}
      <a
        href="https://wa.me/918617358372?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Be%20Bonny%20Ladies%20salon."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 active:scale-95 duration-200 transition-transform focus:outline-none"
        aria-label="Chat on WhatsApp"
        id="whatsapp-floater"
      >
        💬
      </a>

      {/* Scrolling Back-To-Top Button */}
      {showToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-24 right-7 z-30 w-11 h-11 rounded-full bg-deep-burgundy border border-rose-gold/20 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 hover:bg-rose-gold hover:text-charcoal duration-200 transition-all focus:outline-none"
          id="back-to-top-floater"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 animate-pulse" />
        </button>
      )}
    </div>
  );
}
