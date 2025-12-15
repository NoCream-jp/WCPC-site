// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // ★この行があるか？

export default defineConfig({
  integrations: [
    tailwind() // ★この行があるか？
  ]
});