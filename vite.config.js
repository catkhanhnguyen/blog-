import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/recipes": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
      "/tags": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
      "/mealtypes": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
