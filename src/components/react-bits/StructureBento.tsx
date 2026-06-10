/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { motion, useReducedMotion } from 'motion/react';
import BorderGlow from './BorderGlow';

export interface StructureModule {
  id: string;
  title: string;
  description: string;
  filesPreview: string;
  href: string;
  spanClass: string;
}

interface StructureBentoProps {
  modules: StructureModule[];
}

export function StructureBento({ modules }: StructureBentoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 md:grid-cols-6">
      {modules.map((mod, index) => (
        <motion.div
          key={mod.id}
          className={mod.spanClass}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <BorderGlow borderRadius={16} glowRadius={24} fillOpacity={0.22} className="h-full">
            <a
              href={mod.href}
              className="group block h-full p-5 transition active:scale-[0.99]"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] transition group-hover:text-[var(--color-accent)]">
                {mod.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{mod.description}</p>
              <p className="mt-4 font-mono text-xs text-[var(--color-text-muted)]">{mod.filesPreview}</p>
            </a>
          </BorderGlow>
        </motion.div>
      ))}
    </div>
  );
}
