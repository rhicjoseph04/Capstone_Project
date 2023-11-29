import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/your-repo-name/', // Replace with your actual repository name
  plugins: [react()],
})