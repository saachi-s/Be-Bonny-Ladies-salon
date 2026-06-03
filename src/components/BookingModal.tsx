import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServicePreset?: string;
}

export default function BookingModal({ isOpen, onClose, selectedServicePreset = "" }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(selectedServicePreset);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  React.useEffect(() => {
    if (selectedServicePreset) {
      setService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  const validate = () => {
    const tempErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) tempErrors.name = 'Please provide your name.';
    if (!phone.trim()) {
      tempErrors.phone = 'Please provide your phone number.';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(phone.trim())) {
      tempErrors.phone = 'Please provide a valid phone number.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleBooking = () => {
    if (!validate()) return;

    const formattedMessage = `Hi! I would like to book an appointment at Be Bonny Ladies salon (Tamluk).

• *Name*: ${name.trim()}
• *Phone*: ${phone.trim()}
• *Service*: ${service || 'General Query/Consultation'}
• *Date*: ${date || 'Not specified'}
• *Time*: ${time || 'Not specified'}

Please confirm my slot. Thank you!`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/918617358372?text=${encodedText}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative bg-ivory text-charcoal w-full max-w-lg rounded-[30px] border border-rose-gold/25 p-6 md:p-8 shadow-2xl z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
            id="modal-container"
          >
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-gold/10 rounded-full filter blur-xl -translate-y-12 translate-x-12" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blush-pink/20 rounded-full filter blur-xl translate-y-12 -translate-x-12" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-charcoal/5 hover:bg-charcoal/10 text-charcoal/80 transition-colors focus:outline-none"
              id="close-modal-btn"
              aria-label="Close booking modal"
            >
              ✕
            </button>

            {/* Title */}
            <div className="text-center mb-6 relative">
              <span className="font-alt text-[0.65rem] tracking-[4px] uppercase text-rose-gold block mb-2">✦ Be Bonny Salon ✦</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-deep-burgundy">
                Book Your <span className="italic font-normal">Appointment</span>
              </h3>
              <p className="text-xs text-charcoal/60 mt-1 max-w-[280px] mx-auto">
                Fill out the secure form below to instantly schedule with our beauty artisans.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4 relative">
              {/* Name field */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1" htmlFor="book-name">Your Full Name *</label>
                <input
                  type="text"
                  id="book-name"
                  placeholder="e.g. Priyadarshini Roy"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (e.target.value) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all text-sm ${
                    errors.name ? 'border-red-500 focus:ring-red-200' : 'border-rose-gold/30 focus:border-rose-gold focus:ring-rose-gold/15'
                  }`}
                />
                {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
              </div>

              {/* Phone field */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1" htmlFor="book-phone">Mobile Phone Number *</label>
                <input
                  type="tel"
                  id="book-phone"
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (e.target.value) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all text-sm ${
                    errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-rose-gold/30 focus:border-rose-gold focus:ring-rose-gold/15'
                  }`}
                />
                {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
              </div>

              {/* Service selection */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1" htmlFor="book-service">Desired Service</label>
                <select
                  id="book-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rose-gold/30 bg-white focus:outline-none focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/11 transition-all text-sm cursor-pointer"
                >
                  <option value="">Consultation / Other Query</option>
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.name}>{srv.icon} {srv.name}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1" htmlFor="book-date">Preferred Date</label>
                  <input
                    type="date"
                    id="book-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-rose-gold/30 bg-white focus:outline-none focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/11 transition-all text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1" htmlFor="book-time">Preferred Time</label>
                  <input
                    type="time"
                    id="book-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-rose-gold/30 bg-white focus:outline-none focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/11 transition-all text-xs"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleBooking}
                className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-deep-burgundy to-rose-gold hover:opacity-95 text-white font-semibold text-sm uppercase tracking-wider shadow-lg transition-transform focus:outline-none hover:-translate-y-0.5 active:translate-y-0"
                id="submit-booking-btn"
              >
                ✨ Request Via WhatsApp
              </button>

              <div className="text-center mt-3">
                <span className="text-[10px] text-charcoal/50">
                  Or reach us instantly: <a href="tel:+918617358372" className="text-rose-gold hover:underline font-semibold">+91 86173 58372</a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
