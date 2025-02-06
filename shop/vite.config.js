import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/vite-build/", // Ensures correct asset loading
  plugins: [react()],
});