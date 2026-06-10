/**
 * @by oh-my-zerone
 * @date 2026-07-18
 *
 * 首页使用技巧横向列表。
 * 每行：序号徽章 + 标题 + 摘要（单行截断）+ → 箭头。
 * 复用 SpotlightCard hover 交互。
 */
'use client';

import { motion, useReducedMotion } from 'motion/react';
import SpotlightCard from './SpotlightCard';

export interface UsageTipItem {
  slug: string;
  index: number;
  title: string;
  summary: string;
  href: string;
}

interface UsageTipsListProps {
  tips: UsageTipItem[];
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function UsageTipsList({ tips }: UsageTipsListProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-3">
      {tips.map((tip, i) => (
        <motion.div
          key={tip.slug}
          initial={reduceMotion ? false : { opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.4,
            delay: Math.min(i * 0.06, 0.3),
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <SpotlightCard className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
            <a href={tip.href} className="group flex items-center gap-4 px-5 py-4 transition active:scale-[0.99]">
              {/* 序号徽章 */}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-muted)] text-xs font-semibold text-[var(--color-accent)]">
                {String(tip.index).padStart(2, '0')}
              </span>

              {/* 标题 + 摘要 */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{tip.title}</p>
                <p className="mt-0.5 truncate text-xs text-[var(--color-text-secondary)]">{tip.summary}</p>
              </div>

              {/* → 箭头 */}
              <ChevronRight />
            </a>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}
