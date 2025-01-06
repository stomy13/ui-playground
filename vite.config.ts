/// <reference types="vitest" />
import path from 'node:path'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [TanStackRouterVite(), viteReact(), react()],
  plugins: [TanStackRouterVite(), viteReact()],
  base: '/ui-playground/',
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    exclude: [...configDefaults.exclude, 'tests'],
  },
  resolve: {
    alias: {
      '~/': path.join(__dirname, './src/'),
    },
  },
})
