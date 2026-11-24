import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const resumePath = fileURLToPath(new URL('./public/resume.pdf', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __HAS_RESUME__: JSON.stringify(existsSync(resumePath)),
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
