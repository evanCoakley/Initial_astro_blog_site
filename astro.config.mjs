import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://moonlit-kringle-e364f4.netlify.app/",
  integrations: [preact()]
});