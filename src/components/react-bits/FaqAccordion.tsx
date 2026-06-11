/**
 * @by oh-my-zerone
 * @date 2026-06-11
 *
 * 首页 FAQ 手风琴列表。支持自由多开，展开/收起带动画。
 */
'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { FaqAnswerBlock } from '@/constants/faq';

export interface FaqAccordionItem {
  question: string;
  answer: FaqAnswerBlock[];
}

interface FaqAccordionProps {
  items: FaqAccordionItem[];
}

function ChevronDown({ open }: { open: boolean }) {
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
      className={`shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function AnswerContent({ blocks }: { blocks: FaqAnswerBlock[] }) {
  return (
    <div className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return <p key={i}>{block.text}</p>;
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="list-disc space-y-1 pl-5">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <code
            key={i}
            className="block rounded-[var(--radius-sm)] bg-[var(--color-surface-muted)] px-3 py-2 font-mono text-sm text-[var(--color-text-primary)]"
          >
            {block.text}
          </code>
        );
      })}
    </div>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const reduceMotion = useReducedMotion();
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set());

  const toggle = (index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openSet.has(index);

        return (
          <motion.div
            key={item.question}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.4,
              delay: Math.min(index * 0.05, 0.25),
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[var(--color-surface-muted)]"
            >
              <span className="text-sm font-medium text-[var(--color-text-primary)]">{item.question}</span>
              <ChevronDown open={isOpen} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[var(--color-border)] px-5 py-4">
                    <AnswerContent blocks={item.answer} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
