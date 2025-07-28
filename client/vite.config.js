// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/', // ✅ Add this line
  plugins: [react(),tailwindcss(),],
  server: {
    historyApiFallback: true, // Enable history API fallback for SPA routing
    proxy: {
      '/api': 'http://localhost:5000', // proxy /api → Express
    },

  },
});
