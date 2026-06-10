/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { Children, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const containerVariants = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.12, delayChildren: delay },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function StaggerReveal({ children, className, delay = 0.15 }: StaggerRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      custom={delay}
    >
      {Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
