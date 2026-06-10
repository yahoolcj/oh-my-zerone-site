/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { motion, useReducedMotion } from 'motion/react';
import BorderGlow from './BorderGlow';

export interface EvolutionSummaryItem {
  id: string;
  title: string;
  summary: string;
  flowSteps?: string[];
}

interface EvolutionStepsGridProps {
  steps: EvolutionSummaryItem[];
}

export function EvolutionStepsGrid({ steps }: EvolutionStepsGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <BorderGlow borderRadius={16} glowRadius={24} fillOpacity={0.22} className="h-full">
            <article className="evolution-step-card flex h-full flex-col p-6">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{step.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{step.summary}</p>
              {step.flowSteps && step.flowSteps.length > 0 && (
                <ul className="evolution-flow mt-5 grid gap-2 sm:grid-cols-2">
                  {step.flowSteps.map((label) => (
                    <li key={label} className="evolution-flow-item text-sm text-[var(--color-text-primary)]">
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </BorderGlow>
        </motion.div>
      ))}
    </div>
  );
}
