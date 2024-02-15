import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  external: ["react", "react-dom", "react-emoji-picker", "emoji-mart"],
  build: {
    rollupOptions: {
    },
  },
})