/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n';

export type DocSlug = 'overview' | 'install' | 'structure' | 'evolution';

export async function getDocEntry(
  locale: Locale,
  slug: DocSlug,
): Promise<CollectionEntry<'docs'> | undefined> {
  const entries = await getCollection('docs');
  const target = `${locale}/${slug}`;
  return entries.find(
    (entry) => entry.id === target || entry.id.replace(/\.md$/, '') === target,
  );
}
