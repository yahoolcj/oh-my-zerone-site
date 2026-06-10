/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { useReducedMotion } from 'motion/react';
import GradientText from './GradientText';

interface HeroBrandTitleProps {
  children: string;
}

export function HeroBrandTitle({ children }: HeroBrandTitleProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span className="bg-gradient-to-br from-[var(--color-text-primary)] via-[var(--color-text-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
        {children}
      </span>
    );
  }

  return (
    <GradientText
      className="hero-brand-title-gradient"
      colors={['#fafafa', '#10b981', '#34d399', '#fafafa']}
      animationSpeed={12}
      direction="horizontal"
    >
      {children}
    </GradientText>
  );
}
