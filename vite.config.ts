import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ mode }) => ({
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
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    setupFiles: 'src/vitest/setupTests.ts',
    coverage: {
      include: ['src/lib', 'src/routes'],
      exclude: ['src/lib/service-worker', 'src/**/*.{test,spec}.{js,ts}', 'src/lib/types']
    },
    environment: 'jsdom',
    restoreMocks: true,
    globals: true
  },
  resolve: {
    conditions: mode === 'test' ? ['browser'] : []
  }
}));
