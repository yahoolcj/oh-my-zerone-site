/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
'use client';

import { useState } from 'react';

interface HeroInstallChipProps {
  cmds: string[];
  copyLabel: string;
  copiedLabel: string;
  /** 'cmd' renders each entry as a shell command ($ prefix, mono); 'text' renders as a sentence. */
  variant?: 'cmd' | 'text';
}

export function HeroInstallChip({ cmds, copyLabel, copiedLabel, variant = 'cmd' }: HeroInstallChipProps) {
  const [copied, setCopied] = useState(false);
  const copyText = cmds.join('\n');

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const isText = variant === 'text';

  return (
    <div className="mt-8 flex justify-center">
      <div
        className={
          isText
            ? 'hero-install-chip inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-sm text-[var(--color-text-secondary)]'
            : 'hero-install-chip inline-flex items-start gap-3 rounded-2xl px-4 py-3 font-mono text-sm text-[var(--color-text-primary)]'
        }
      >
        <div className={isText ? 'max-w-2xl space-y-1 text-left leading-relaxed' : 'space-y-1 text-left'}>
          {cmds.map((cmd) => (
            <div key={cmd} className={isText ? '' : 'whitespace-nowrap'}>
              {!isText && <span className="text-[var(--color-text-muted)]">$ </span>}
              {isText ? <span>{cmd}</span> : <code>{cmd}</code>}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="hero-install-copy shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium text-[var(--color-text-secondary)] transition active:scale-[0.98]"
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
    </div>
  );
}
