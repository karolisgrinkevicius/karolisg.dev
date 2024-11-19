import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '$lib/assets/styles/breakpoints' as *;
        `
      }
    }
  },
  test: { include: ['src/**/*.{test,spec}.{js,ts}'] }
});
