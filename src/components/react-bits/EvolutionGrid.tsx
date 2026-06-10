/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { motion, useReducedMotion } from 'motion/react';
import BorderGlow from './BorderGlow';

export interface EvolutionItem {
  title: string;
  description: string;
  files: string[];
}

interface EvolutionGridProps {
  items: EvolutionItem[];
}

export function EvolutionGrid({ items }: EvolutionGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 md:grid-cols-3 md:items-start">
      {items.map((card, index) => (
        <motion.div
          key={card.title}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <BorderGlow
            className="h-full"
            borderRadius={16}
            glowRadius={28}
            fillOpacity={0.28}
          >
            <article className="h-full p-6">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{card.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.files.map((file) => (
                  <code
                    key={file}
                    className="rounded-[var(--radius-sm)] bg-[var(--color-surface-muted)] px-2 py-1 font-mono text-xs text-[var(--color-accent)]"
                  >
                    {file}
                  </code>
                ))}
              </div>
            </article>
          </BorderGlow>
        </motion.div>
      ))}
    </div>
  );
}
