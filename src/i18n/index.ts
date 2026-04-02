import { en } from './en';
import { zhTW } from './zh-TW';
import type { Translations } from './en';

export const SITE_URL = 'https://freelance.seria.moe';

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

export function getAlternateUrl(currentLocale: string, path: string): { en: string; zhTW: string } {
  const cleanPath = path === '/' ? '' : path;
  return {
    en: `${SITE_URL}/en${cleanPath}`,
    zhTW: `${SITE_URL}${cleanPath}`,
  };
}
