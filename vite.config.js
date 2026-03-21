import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // এই লাইনটা আছে কি?

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // এই লাইনটাও যোগ করো
  ],
})
