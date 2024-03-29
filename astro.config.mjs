import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://vivianediniz.com",
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "pt",
        locales: {
          pt: "pt-BR",
          en: "en-US",
        },
      },
    }),
    icon(),
  ],
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "en"],
  },
});
