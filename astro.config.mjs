/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three')) {
              return 'vendor-three';
            }
            if (id.includes('node_modules/motion')) {
              return 'vendor-motion';
            }
          },
        },
      },
    },
  },
});
