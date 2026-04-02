import { en } from './en';
import { zhTW } from './zh-TW';
import type { Translations } from './en';

export const translations: Record<string, Translations> = {
  en,
  'zh-TW': zhTW,
};

export function useTranslations(locale: string): Translations {
  return translations[locale] ?? translations['zh-TW'];
}

export function getAlternateLocale(locale: string): string {
  return locale === 'zh-TW' ? 'en' : 'zh-TW';
}

export function getLocalePath(locale: string, path: string): string {
  if (locale === 'zh-TW') return path;
  return `/${locale}${path}`;
}
