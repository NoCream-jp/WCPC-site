// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon"; // ← ★1. インポートを追加

export default defineConfig({
  integrations: [
    tailwind(),
    icon() // ← ★2. ここに追加
  ]
});