/** @ts-check */
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.twinpixel.nl',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/en/') && !page.includes('/nl/') })],
  vite: {
    plugins: [tailwind()],
  },
});
