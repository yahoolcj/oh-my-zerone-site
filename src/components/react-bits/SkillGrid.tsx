/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
import { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { SkillEntry } from '@/lib/skills';
import type { SkillCategory } from '@/constants/skills-meta';

const CATEGORY_COLORS: Record<SkillCategory, string> = {
  clarify: '#3b82f6',
  plan: '#8b5cf6',
  develop: '#10b981',
  review: '#f59e0b',
  utility: '#71717a',
};

interface FilterLabels {
  all: string;
  clarify: string;
  plan: string;
  develop: string;
  review: string;
  utility: string;
}

interface Props {
  skills: SkillEntry[];
  filterLabels: FilterLabels;
  basePath: string;
  locale: 'zh' | 'en';
}

export default function SkillGrid({ skills, filterLabels, basePath, locale }: Props) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const reduce = useReducedMotion();
  const isZh = locale === 'zh';

  const categories = useMemo(() => {
    const cats = new Set(skills.map((s) => s.category));
    return Array.from(cats);
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return skills;
    return skills.filter((s) => s.category === activeCategory);
  }, [skills, activeCategory]);

  return (
    <div>
      {/* Category Filter Bar */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`rounded-[var(--radius-sm)] px-3 py-1.5 text-sm transition ${
            activeCategory === 'all'
              ? 'bg-[var(--color-accent)] text-white'
              : 'border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
          }`}
        >
          {filterLabels.all}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-[var(--radius-sm)] px-3 py-1.5 text-sm transition ${
              activeCategory === cat
                ? 'text-white'
                : 'border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
            }`}
            style={
              activeCategory === cat
                ? { backgroundColor: CATEGORY_COLORS[cat] }
                : undefined
            }
          >
            {filterLabels[cat]}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredSkills.map((skill, i) => (
          <motion.a
            key={skill.slug}
            href={`${basePath}/${skill.slug}`}
            className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 transition hover:border-[var(--color-accent)] hover:shadow-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Header: Name + Category Tag */}
            <div className="mb-3 flex items-center gap-3">
              <code className="font-mono text-base text-[var(--color-accent)]">
                /{skill.name}
              </code>
              <span
                className="shrink-0 rounded-[var(--radius-sm)] px-2 py-0.5 text-[11px] font-medium text-white"
                style={{ backgroundColor: CATEGORY_COLORS[skill.category] }}
              >
                {filterLabels[skill.category]}
              </span>
            </div>

            {/* Scenario Summary */}
            <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {isZh ? skill.descriptionZh : skill.descriptionEn}
            </p>

            {/* Code Snippet (Terminal Style) */}
            {(isZh ? skill.snippetZh : skill.snippetEn) && (
              <div className="mt-auto overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] px-3 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
                </div>
                <pre className="overflow-x-auto p-3 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  <code className="font-mono text-[var(--color-text-secondary)]">
                    {(() => {
                      const raw = isZh ? skill.snippetZh : skill.snippetEn;
                      return raw.length > 240 ? raw.slice(0, 240) + '...' : raw;
                    })()}
                  </code>
                </pre>
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
