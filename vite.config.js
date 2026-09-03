import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://chaitu116.github.io/Naukri_Clone/ on GitHub Pages.
  base: '/Naukri_Clone/',
  plugins: [react(), tailwindcss()],
})
