// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkCallouts from 'remark-callouts';
import rehypeKatex from 'rehype-katex';
import wikiLinkPlugin from 'remark-wiki-link';

import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), preact()],

  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkCallouts,
      [
        wikiLinkPlugin,
        {
          pageResolver: (name) => [name.toLowerCase().replace(/\s+/g, '-')],
          hrefTemplate: (permalink) => `__WIKI__${permalink}`,
          aliasDivider: '|',
        },
      ],
    ],
    rehypePlugins: [rehypeKatex],
  },
});