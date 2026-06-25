/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
import fs from 'node:fs';
import path from 'node:path';
import { getSkillMeta, SKILLS_META, type SkillMeta } from '@/constants/skills-meta';

const SKILLS_ROOT = path.join(process.cwd(), 'packages', 'omz', 'skills');

export interface SkillEntry extends SkillMeta {
  sourcePath: string;
  body: string;
}

function stripSkillMetadata(content: string): string {
  return content
    .replace(/^@author:.*$/gm, '')
    .replace(/^@email:.*$/gm, '')
    .replace(/^@group:.*$/gm, '')
    .replace(/^#\s+.+\n\n/, '')
    .trim();
}

export function getAllSkills(): SkillEntry[] {
  const slugs = fs
    .readdirSync(SKILLS_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((slug) => fs.existsSync(path.join(SKILLS_ROOT, slug, 'SKILL.md')));

  const ordered = SKILLS_META.map((m) => m.slug).filter((s) => slugs.includes(s));
  const extras = slugs.filter((s) => !ordered.includes(s));
  const finalSlugs = [...ordered, ...extras];

  return finalSlugs.map((slug) => {
    const sourcePath = path.join('packages', 'omz', 'skills', slug, 'SKILL.md');
    const raw = fs.readFileSync(path.join(SKILLS_ROOT, slug, 'SKILL.md'), 'utf-8');
    const meta = getSkillMeta(slug);
    return {
      slug,
      name: meta?.name ?? slug,
      descriptionZh: meta?.descriptionZh ?? slug,
      descriptionEn: meta?.descriptionEn ?? slug,
      category: meta?.category ?? 'utility',
      sourcePath,
      body: stripSkillMetadata(raw),
    };
  });
}

export function getSkillBySlug(slug: string): SkillEntry | undefined {
  return getAllSkills().find((s) => s.slug === slug);
}
