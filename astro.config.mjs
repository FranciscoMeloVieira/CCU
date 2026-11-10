process.env.ASTRO_TELEMETRY_DISABLED = '1';

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Base URL configuration:
// Defaults to '/CCU' for GitHub Pages repository-based deployment (https://franciscomelovieira.github.io/CCU)
// Can be overridden via the BASE_PATH environment variable (e.g. BASE_PATH=/ for custom domains)
const base = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : '/CCU';

// https://astro.build/config
export default defineConfig({
  site: 'https://franciscomelovieira.github.io',
  base: base,
  vite: {
    plugins: [tailwindcss()],
  },
});
