/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FloatCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FloatCard({ children, className, delay = 0.5 }: FloatCardProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
}
