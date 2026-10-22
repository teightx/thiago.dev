import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O site é servido em https://teightx.github.io/thiago.dev/
export default defineConfig({
  base: '/thiago.dev/',
  plugins: [react()],
})
