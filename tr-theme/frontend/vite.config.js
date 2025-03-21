import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/wp-json': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wp-json/, '/wp-json')
      }
    }
  },

  build: {
    rollupOptions: {
      output: {
        // Ser till att filnamnen innehåller hashar för cachehantering
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      }
    }
  }
});