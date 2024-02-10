import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://debling.github.io',
  base: '/vivianediniz',
  integrations: [tailwind(), sitemap(), icon()]
});