import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.bengalitools.com',
  output: 'static',
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        if (url === 'https://www.bengalitools.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (url.includes('/currency/')) {
          return { ...item, priority: 0.9, changefreq: 'daily' };
        }
        if (url.includes('/blog/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        if (url.includes('/contact') || url.includes('/privacy') || url.includes('/about') || url.includes('/terms')) {
          return { ...item, priority: 0.4, changefreq: 'yearly' };
        }
        return { ...item, priority: 0.8, changefreq: 'weekly' };
      },
    }),
    tailwind(),
  ],
});
