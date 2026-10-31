import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({ hot: false })],
  test: {
    environment: 'jsdom',
    pool: 'threads',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
    include: ['src/**/*.test.js']
  },
  resolve: {
    conditions: ['browser']
  }
})
