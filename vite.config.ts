import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'client',
  build: {
    outDir: '../dist',
    sourcemap: true,
  },
  plugins: [react()]
})
