// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://habitspioneer.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: { prefixDefaultLocale: false }, // es → /, en → /en, pt → /pt
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR', en: 'en', pt: 'pt-BR' },
      },
    }),
  ],
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
