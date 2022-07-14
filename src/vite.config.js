import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.config'

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname),
      public: resolve(__dirname, '../public'),
    },
  },
  build: {
    outDir: resolve(__dirname, '../dist'),
  },
  plugins: [vue(), crx({ manifest })],
})
