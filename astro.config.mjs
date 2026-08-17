// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jamietbaycouncil.ca',
  // The sitemap otherwise lists the page twice, with and without a trailing
  // slash, which reads as duplicate content. Keep the canonical form only.
  integrations: [
    sitemap({
      filter: (page) => page.endsWith('/'),
    }),
  ],
});