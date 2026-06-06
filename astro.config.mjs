// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import wikiLinkPlugin from 'remark-wiki-link';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()],

  markdown: {
    remarkPlugins: [
      remarkMath,
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