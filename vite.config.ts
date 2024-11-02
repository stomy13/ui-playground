/// <reference types="vitest" />
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
