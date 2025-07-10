import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist/webview',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    // Prevent source map generation in production
    sourcemap: process.env.NODE_ENV === 'development',
    // Ensure clean builds
    emptyOutDir: true,
  },
  // Use relative base path for assets
  base: './',
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
