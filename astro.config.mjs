// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://tools.mcds.moe',
  integrations: [expressiveCode(), mdx(), sitemap(), partytown()],

  vite: {
    plugins: [tailwindcss()],
  },
});