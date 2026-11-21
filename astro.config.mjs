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
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  // Pages stay prerendered; only routes that set `prerender = false` (src/pages/api/) run as functions.
  output: 'static',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    preact(),
    clerk({
      signInFallbackRedirectUrl: '/',
      signUpFallbackRedirectUrl: '/',
      // Clerk's sign-in window in the site's paper-and-terracotta look (tokens from globals.css).
      appearance: {
        variables: {
          colorPrimary: '#b8451f',
          colorText: '#1c1814',
          colorTextSecondary: '#4a423a',
          colorBackground: '#ffffff',
          colorInputBackground: '#faf7f2',
          fontFamily: '"Manrope Variable", ui-sans-serif, system-ui, sans-serif',
          borderRadius: '12px',
        },
      },
    }),
  ],

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