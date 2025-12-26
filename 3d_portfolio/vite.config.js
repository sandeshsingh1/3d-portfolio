import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  assetsInclude: ['**/*.glb'], // Added missing comma here
  resolve: {
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
})