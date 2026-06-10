/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { motion, useReducedMotion } from 'motion/react';
import BorderGlow from './BorderGlow';

export interface QuickStartItem {
  title: string;
  command?: string;
}

interface QuickStartGridProps {
  steps: QuickStartItem[];
}

export function QuickStartGrid({ steps }: QuickStartGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <BorderGlow borderRadius={16} glowRadius={26} fillOpacity={0.25} className="h-full">
            <article className="h-full bg-[var(--color-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{step.title}</h3>
              {step.command && (
                <code className="mt-3 block rounded-[var(--radius-sm)] bg-[var(--color-surface-muted)] px-3 py-2 font-mono text-sm text-[var(--color-text-primary)]">
                  {step.command}
                </code>
              )}
            </article>
          </BorderGlow>
        </motion.div>
      ))}
    </div>
  );
}
