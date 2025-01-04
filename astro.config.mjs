// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
    },
  },
});

