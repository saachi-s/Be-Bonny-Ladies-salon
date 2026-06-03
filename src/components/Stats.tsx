import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface StatItemProps {
  initialValue: number;
  targetValue: number;
  suffix?: string;
  label: string;
}

function RollingCounter({ initialValue, targetValue, suffix = '', label }: StatItemProps) {
  const [count, setCount] = useState(initialValue);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const isDecimal = targetValue % 1 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentVal = progress * (targetValue - initialValue) + initialValue;
      setCount(isDecimal ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, targetValue, initialValue, isDecimal]);

  return (
    <div ref={elementRef} className="flex flex-col items-center text-center p-6 md:p-8 relative">
      <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-champagne select-none flex items-center leading-none">
        {isDecimal ? count.toFixed(1) : count}
        <span className="text-rose-gold text-2xl sm:text-3xl font-bold ml-1">{suffix}</span>
      </span>
      <div className="w-10 h-[2px] bg-gradient-to-r from-rose-gold to-champagne mt-4 mb-3 rounded-full" />
      <p className="font-alt text-[0.6rem] sm:text-[0.65rem] tracking-[3px] uppercase text-white/70 font-semibold select-none">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
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
      className="relative bg-gradient-to-br from-[#1c0c11] via-deep-burgundy to-charcoal text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Decorative twinkle stars */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        <div className="absolute top-4 left-1/4 w-1 h-1 bg-champagne rounded-full animate-ping" />
        <div className="absolute bottom-6 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-rose-gold rounded-full animate-ping" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5 divide-y-0 select-none">
          <RollingCounter initialValue={0} targetValue={121} suffix="+" label="Verified Reviews" />
          <RollingCounter initialValue={0} targetValue={100} suffix="%" label="Positive Feedback" />
          <RollingCounter initialValue={0} targetValue={4.9} suffix="★" label="Star Rating" />
          <RollingCounter initialValue={0} targetValue={15} suffix="+" label="Premium Services" />
        </div>
      </div>
    </motion.section>
  );
}
