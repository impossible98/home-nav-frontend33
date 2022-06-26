import path from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import progress from 'vite-plugin-progress';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (id.includes('node_modules/.pnpm/')) {
              return id.split('node_modules/.pnpm/')[1].split('/')[0];
            } else {
              return id.split('node_modules/')[1].split('/')[0];
            }
          }
        },
      },
    },
  },
  plugins: [
    progress(),
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Home Nav',
        short_name: 'Home Nav',
        description: 'Your home navigation',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
