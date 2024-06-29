import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias : {
      '~': '/src',
    },
  },
  base: process.env.NODE_ENV === 'development' ? '' : 'static/prayerapp',
  build: {
    outDir: '../prayerapp/static/prayerapp',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
})
