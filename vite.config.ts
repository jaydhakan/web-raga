import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const envHosts = (env.VITE_ALLOWED_HOSTS ?? '')
    .split(',')
    .map((host) => host.trim())
    .filter(Boolean);

  const allowedHosts = Array.from(new Set(['localhost', '127.0.0.1', ...envHosts]));

  return {
    plugins: [react()],
    server: {
      host: true,
      allowedHosts,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
              return 'vendor';
            }
            if (
              id.includes('node_modules/react-router') ||
              id.includes('node_modules/@remix-run/')
            ) {
              return 'router';
            }
          },
        },
      },
    },
  };
});
