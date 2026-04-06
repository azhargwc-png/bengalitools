import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bengalitools.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    tailwind(),
  ],
});
