import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), wasm(), tailwindcss()],
  base: './',
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
})
