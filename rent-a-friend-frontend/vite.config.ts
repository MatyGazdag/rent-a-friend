import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@rentafriend/shared': path.resolve('/app/shared/index.ts'),
    },
  },
  server: {
    fs: {
      allow: ['/app/rent-a-friend-frontend', '/app/shared'],
    },
  },
  optimizeDeps: {
    include: ['zod'],
  },
})
