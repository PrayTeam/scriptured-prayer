import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias : {
      '~': '/src',
    },
  },
  base: process.env.NODE_ENV === 'development' ? '' : 'static/app',
  build: {
    outDir: '../prayerapp/static/app',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
})
