
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// configure vite for github pages
export default defineConfig({
  plugins: [react()],
  base: '/anike-portfolio/',
})