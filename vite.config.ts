import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ymmy1.github.io/' ,
  build: {
    outDir: 'dist',
  },
});
