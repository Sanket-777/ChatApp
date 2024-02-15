import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  external: ["react", "react-dom", "react-emoji-picker", "emoji-mart"],
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
    },
  },
})