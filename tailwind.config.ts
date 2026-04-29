import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        raga: {
          ink: '#17201b',
          pine: '#1f4d3a',
          moss: '#6b7f52',
          sand: '#e9ddc7',
          linen: '#f7f1e6',
          gold: '#b98943',
          rust: '#a95c35',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(23, 32, 27, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
