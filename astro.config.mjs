// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['en', 'zh-TW'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
