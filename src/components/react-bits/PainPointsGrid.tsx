/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { motion, useReducedMotion } from 'motion/react';
import SpotlightCard from './SpotlightCard';

export interface PainPointItem {
  title: string;
  description: string;
}

interface PainPointsGridProps {
  items: PainPointItem[];
}

export function PainPointsGrid({ items }: PainPointsGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:items-stretch">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <SpotlightCard className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.description}</p>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}
