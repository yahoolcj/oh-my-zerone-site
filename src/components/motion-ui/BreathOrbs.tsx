/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { motion, useReducedMotion } from 'motion/react';

const ORBS = [
  {
    className: 'top-[-15%] right-[-10%] h-[min(58vw,580px)] w-[min(58vw,580px)]',
    gradient: 'radial-gradient(circle, rgb(16 185 129 / 0.32) 0%, transparent 68%)',
    animate: { scale: [1, 1.14, 1], opacity: [0.55, 0.95, 0.55], x: [0, -24, 0], y: [0, 18, 0] },
    duration: 9,
  },
  {
    className: 'bottom-[-22%] left-[-14%] h-[min(52vw,520px)] w-[min(52vw,520px)]',
    gradient: 'radial-gradient(circle, rgb(6 78 59 / 0.45) 0%, transparent 70%)',
    animate: { scale: [1, 1.1, 1], opacity: [0.45, 0.8, 0.45], x: [0, 28, 0], y: [0, -16, 0] },
    duration: 11,
  },
  {
    className: 'top-[32%] left-[38%] h-[min(42vw,420px)] w-[min(42vw,420px)]',
    gradient: 'radial-gradient(circle, rgb(52 211 153 / 0.22) 0%, transparent 72%)',
    animate: { scale: [0.92, 1.08, 0.92], opacity: [0.35, 0.7, 0.35] },
    duration: 13,
  },
] as const;

export function BreathOrbs() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-breath-grid absolute inset-0" />
      <div className="hero-breath-vignette absolute inset-0" />
      {ORBS.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[80px] ${orb.className}`}
          style={{ background: orb.gradient }}
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={reduce ? { opacity: 0.6, scale: 1 } : orb.animate}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: orb.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.4,
                }
          }
        />
      ))}
      {!reduce && (
        <motion.div
          className="absolute left-1/2 top-[18%] h-48 w-48 -translate-x-1/2 rounded-full blur-[60px]"
          style={{ background: 'radial-gradient(circle, rgb(16 185 129 / 0.25) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
}
