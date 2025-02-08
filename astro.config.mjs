import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://asierdelcidperez.github.io",
  base: "portafolios",
  server: {
    port: 3000
  },
  integrations: [tailwind()]
});