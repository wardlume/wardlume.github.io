import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from https://wardlume.github.io (GitHub Pages, org site).
// For a custom domain later: change `site`, add public/CNAME.
export default defineConfig({
  site: 'https://wardlume.github.io',
  trailingSlash: 'never',
  // download.html is served at /download on GitHub Pages: no trailing-slash redirects.
  build: { format: 'file' },
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
