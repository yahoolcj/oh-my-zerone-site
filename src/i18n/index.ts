/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
import { en } from './en';
import { zh } from './zh';
import type { I18nLocale, Locale, UiStrings } from './types';

export type { I18nLocale, Locale, UiStrings } from './types';

export const LOCALES: I18nLocale[] = [
  { code: 'zh', label: '中', prefix: '' },
  { code: 'en', label: 'EN', prefix: '/en' },
];

const UI_MAP: Record<Locale, UiStrings> = { zh, en };

export function getUi(locale: Locale): UiStrings {
  return UI_MAP[locale];
}

export function getLocalePrefix(locale: Locale): string {
  return locale === 'en' ? '/en' : '';
}

export function localizePath(pathname: string, locale: Locale): string {
  const stripped = pathname.replace(/^\/en/, '') || '/';
  const prefix = getLocalePrefix(locale);
  if (stripped === '/') return prefix || '/';
  return `${prefix}${stripped}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const normalized = pathname.replace(/^\/en/, '') || '/';
  return localizePath(normalized, target);
}

export function detectLocaleFromUrl(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'zh';
}
