import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://harshuljain.me',
  integrations: [tailwind(), sitemap()],
  server: { host: '127.0.0.1', port: 4321 },
});
