import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://www.it-experten24.de",
  outDir: "dist",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    mdx(),
    sitemap()
  ],
  markdown: {
    syntaxHighlight: "shiki"
  },
  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@data": fileURLToPath(new URL("./src/data", import.meta.url))
      }
    }
  }
});
