// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://freelance.seria.moe',
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['en', 'zh-TW'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],
});