// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://protoxassassin.github.io',
  base: '/portfolio/',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['localhost', '.ngrok.io', '.ngrok-free.app']
    }
  }
});
