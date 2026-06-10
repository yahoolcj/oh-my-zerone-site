/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { motion, useReducedMotion } from 'motion/react';
import SpotlightCard from './SpotlightCard';

export interface SkillCardItem {
  slug: string;
  name: string;
  category: string;
  description: string;
  href: string;
}

interface SkillsSpotlightGridProps {
  skills: SkillCardItem[];
}

export function SkillsSpotlightGrid({ skills }: SkillsSpotlightGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.slug}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.32), ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <SpotlightCard className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5">
            <a href={skill.href} className="group block h-full transition active:scale-[0.99]">
              <div className="flex items-center justify-between gap-2">
                <code className="font-mono text-sm font-semibold text-[var(--color-accent)]">/{skill.name}</code>
                <span className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">{skill.category}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{skill.description}</p>
            </a>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}
