import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true, // This stops it from trying 5174, 5175...
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

// export default defineConfig({
//   server: {
//     port: 5173,
//     strictPort: true, // This stops it from trying 5174, 5175...
//   },
//   // ... rest of config
// })
