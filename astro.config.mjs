import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://twinpixel.nl",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
});
