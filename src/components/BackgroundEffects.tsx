import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Petal {
  id: number;
  left: number;
  size: number;
  face: string;
  duration: number;
  delay: number;
}

const PETAL_EMOJIS = ['✿', '❀', '✾', '❁', '✻', '✼', '❋', '🌸'];

export default function BackgroundEffects() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Populate initial petals
    const initialPetals = Array.from({ length: 8 }).map((_, i) => createPetal(i));
    setPetals(initialPetals);

    // Keep spawning new petals
    const interval = setInterval(() => {
      setPetals((prev) => {
        const kept = prev.filter((p) => Date.now() - p.id < 12000);
        if (kept.length < 15) {
          return [...kept, createPetal(Date.now())];
        }
        return kept;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const createPetal = (id: number): Petal => {
    return {
      id,
      left: Math.random() * 100, // percentage
      size: 0.6 + Math.random() * 0.9, // rem
      face: PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)],
      duration: 7 + Math.random() * 8, // seconds
      delay: Math.random() * 2,
    };
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* 1. Grain overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

      {/* 2. Shifting blur blobs (Aurora backdrop) */}
      <div className="absolute inset-0 opacity-40 filter blur-[80px] -z-10 animate-[pulse_10s_infinite_alternate]">
        <div 
          className="absolute rounded-full"
          style={{
            width: '450px',
            height: '450px',
            top: '-50px',
            left: '10%',
            background: 'radial-gradient(circle, rgba(247,214,224,0.3) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute rounded-full animate-[spin_20s_linear_infinite]"
          style={{
            width: '550px',
            height: '550px',
            bottom: '10%',
            right: '-100px',
            background: 'radial-gradient(circle, rgba(212,163,115,0.2) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: '350px',
            height: '350px',
            top: '40%',
            left: '-50px',
            background: 'radial-gradient(circle, rgba(107,39,55,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* 3. Falling flower petals */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence>
          {petals.map((petal) => (
            <motion.div
              key={petal.id}
              initial={{ y: -20, x: `${petal.left}vw`, opacity: 0, rotate: 0 }}
              animate={{ 
                y: '105vh', 
                opacity: [0, 0.7, 0.7, 0],
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1) 
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: petal.duration, 
                ease: 'linear',
                delay: petal.delay
              }}
              style={{
                position: 'absolute',
                fontSize: `${petal.size}rem`,
                color: 'rgba(212, 163, 115, 0.4)',
                fontStyle: 'normal',
                fontWeight: 'normal',
              }}
            >
              {petal.face}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
