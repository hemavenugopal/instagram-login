import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
        proxy: {
          '/api': { // Replace '/api' with the base path of your backend API
            target: 'http://localhost:3000', // Replace with your backend server URL
            changeOrigin: true,
            secure: false,
          },
        },
      },
})
