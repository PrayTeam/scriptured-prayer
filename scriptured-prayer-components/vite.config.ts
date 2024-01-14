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
  base: 'static/app',
  build: {
    outDir: '../prayerapp/static/app',
    rollupOptions: {
      input: {
        app: './main.html',
      }
    }
  },
})
