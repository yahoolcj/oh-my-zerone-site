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
}

export function HeroInstallChip({ cmds, copyLabel, copiedLabel }: HeroInstallChipProps) {
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

  return (
    <div className="mt-8 flex justify-center">
      <div className="hero-install-chip inline-flex items-start gap-3 rounded-2xl px-4 py-3 font-mono text-sm text-[var(--color-text-primary)]">
        <div className="space-y-1 text-left">
          {cmds.map((cmd) => (
            <div key={cmd} className="whitespace-nowrap">
              <span className="text-[var(--color-text-muted)]">$ </span>
              <code>{cmd}</code>
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
