// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Friends_Digital_Studio/', // <-- use your GitHub repo name here
  plugins: [react()],
})
