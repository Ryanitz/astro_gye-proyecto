// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gdelpo.github.io',
  base: 'astro_gye-proyecto',
  vite: {
    plugins: [tailwindcss()]
  }
})