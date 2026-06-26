/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
import fs from 'node:fs';
import path from 'node:path';
import { getSkillMeta, SKILLS_META, type SkillMeta } from '@/constants/skills-meta';

const SKILLS_ROOT = path.join(process.cwd(), 'packages', 'omz', 'skills');

export interface SkillEntry extends SkillMeta {
  scenarioZh: string;
  scenarioEn: string;
  snippetZh: string;
  snippetEn: string;
  showcaseZh: string;
  showcaseEn: string;
}

function extractSection(content: string, heading: string): string {
  const idx = content.indexOf(heading);
  if (idx === -1) return '';

  const section = content.slice(idx + heading.length);
  return section.trim();
}

function extractFirstParagraph(content: string, heading: string): string {
  const section = extractSection(content, heading);
  if (!section) return '';

  const lines = section.split('\n');
  const paragraphLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') {
      if (paragraphLines.length > 0) break;
      continue;
    }
    if (trimmed.startsWith('#')) break;
    if (trimmed.startsWith('```')) break;
    paragraphLines.push(trimmed);
  }

  return paragraphLines.join('\n').trim();
}

function extractFirstCodeBlock(content: string, heading: string): string {
  const section = extractSection(content, heading);
  if (!section) return '';

  const lines = section.split('\n');
  let inBlock = false;
  let tickCount = 0;
  const blockLines: string[] = [];

  for (const line of lines) {
    if (!inBlock && line.trim().startsWith('```')) {
      inBlock = true;
      tickCount = line.trim().length;
      blockLines.push(line);
      continue;
    }
    if (inBlock) {
      blockLines.push(line);
      if (line.trim().startsWith('```') && line.trim().length >= tickCount) {
        return blockLines.join('\n').trim();
      }
    }
  }

  return '';
}

function readShowcase(
  skillDir: string,
  lang: 'zh' | 'en',
): { body: string; scenario: string; snippet: string } {
  const filename = lang === 'zh' ? 'SHOWCASE.zh.md' : 'SHOWCASE.en.md';
  const filePath = path.join(skillDir, filename);

  if (!fs.existsSync(filePath)) {
    return { body: '', scenario: '', snippet: '' };
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  const scenarioHeading = lang === 'zh' ? '## 使用场景' : '## Use Scenarios';
  const snippetHeading = lang === 'zh' ? '## 使用效果示例' : '## Example Effects';

  return {
    body: content,
    scenario: extractFirstParagraph(content, scenarioHeading),
    snippet: extractFirstCodeBlock(content, snippetHeading),
  };
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
    const skillDir = path.join(SKILLS_ROOT, slug);
    const meta = getSkillMeta(slug);

    const showcaseZh = readShowcase(skillDir, 'zh');
    const showcaseEn = readShowcase(skillDir, 'en');

    return {
      slug,
      name: meta?.name ?? slug,
      descriptionZh: meta?.descriptionZh ?? slug,
      descriptionEn: meta?.descriptionEn ?? slug,
      category: meta?.category ?? 'utility',
      scenarioZh: showcaseZh.scenario,
      scenarioEn: showcaseEn.scenario,
      snippetZh: showcaseZh.snippet,
      snippetEn: showcaseEn.snippet,
      showcaseZh: showcaseZh.body,
      showcaseEn: showcaseEn.body,
    };
  });
}

export function getSkillBySlug(slug: string): SkillEntry | undefined {
  return getAllSkills().find((s) => s.slug === slug);
}
