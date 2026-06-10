/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    description: z.string().optional(),
    locale: z.enum(['zh', 'en']).default('zh'),
    order: z.number().optional(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/SKILL.md', base: './.omz/skills' }),
});

export const collections = { docs, skills };
