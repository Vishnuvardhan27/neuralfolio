import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),glsl()],
  build: {
    rollupOptions: {
      // This will automatically use the WASM version if needed
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Your FastAPI backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
