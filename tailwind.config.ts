import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        raga: {
          ink: '#141a17',
          pine: '#173c33',
          moss: '#617158',
          mist: '#dbe3dd',
          sand: '#e6d5bd',
          linen: '#f7f2e9',
          ivory: '#fffaf1',
          gold: '#c59a50',
          rust: '#9b5837',
          clay: '#b8835d',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(20, 26, 23, 0.10)',
        card: '0 18px 44px rgba(20, 26, 23, 0.08)',
        lifted: '0 30px 90px rgba(20, 26, 23, 0.16)',
      },
      borderRadius: {
        brand: '0.875rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
