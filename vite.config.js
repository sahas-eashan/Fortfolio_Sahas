import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
   base: '/Fortfolio_Sahas/', // 👈 MUST MATCH the repo name exactly!
});

// This ensures that the app is served correctly from the GitHub Pages URL