/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { motion, useReducedMotion } from 'motion/react';
import SpotlightCard from './SpotlightCard';

export interface EditorItem {
  name: string;
  url: string;
  iconSlug: string;
}

interface EditorsGlowGridProps {
  editors: EditorItem[];
}

export function EditorsGlowGrid({ editors }: EditorsGlowGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {editors.map((editor, index) => (
        <motion.div
          key={editor.name}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
        >
          <SpotlightCard
            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            spotlightColor="rgba(16, 185, 129, 0.14)"
          >
            <a
              href={editor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 transition active:scale-[0.98]"
            >
              <img
                src={`https://cdn.simpleicons.org/${editor.iconSlug}/a1a1aa`}
                alt={editor.name}
                width={32}
                height={32}
                loading="lazy"
                className="h-8 w-8"
              />
              <span className="text-center text-sm font-medium text-[var(--color-text-secondary)]">{editor.name}</span>
            </a>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}
