import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/repo-name/',  // byt ut 'repo-name' mot ditt faktiska repo-namn
  plugins: [react()],
})
