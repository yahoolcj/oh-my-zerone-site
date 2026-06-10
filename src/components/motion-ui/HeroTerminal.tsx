/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface HeroTerminalProps {
  cmd: string;
  copyLabel: string;
  copiedLabel: string;
  hint: string;
}

export function HeroTerminal({ cmd, copyLabel, copiedLabel, hint }: HeroTerminalProps) {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const card = (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-accent)]/20 bg-[var(--color-surface-elevated)]/85 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-md">
      <p className="mb-3 font-mono text-xs text-[var(--color-text-muted)]">Terminal</p>
      <div className="flex items-center gap-3 rounded-[var(--radius-md)] bg-[var(--color-surface-muted)] px-4 py-3 font-mono text-sm">
        <code className="flex-1 overflow-x-auto text-[var(--color-text-primary)]">$ {cmd}</code>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-primary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-[0.98]"
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
      <p className="mt-4 text-sm text-[var(--color-text-muted)]">{hint}</p>
    </div>
  );

  if (reduce) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {card}
    </motion.div>
  );
}
