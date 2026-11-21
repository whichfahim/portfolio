import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://whichfahim.github.io/portfolio/
  base: '/portfolio/',
  resolve: {
    // `@/components/ui` → `src/components/ui`. Keep in sync with "paths" in tsconfig.app.json.
    alias: { '@': '/src' },
  },
});
