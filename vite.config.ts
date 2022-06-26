import path from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import progress from 'vite-plugin-progress';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  plugins: [
    progress(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
