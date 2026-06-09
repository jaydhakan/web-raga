import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        raga: {
          ink: '#111714',
          pine: '#14382f',
          forest: '#0f2a24',
          moss: '#67745a',
          mist: '#dfe7df',
          sand: '#e8d6bc',
          linen: '#f8f1e7',
          ivory: '#fffaf0',
          pearl: '#fffdf8',
          gold: '#c89a4c',
          amber: '#e5c27a',
          rust: '#98583a',
          clay: '#b9835e',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(17, 23, 20, 0.10)',
        card: '0 18px 44px rgba(17, 23, 20, 0.08)',
        lifted: '0 30px 90px rgba(17, 23, 20, 0.16)',
        glow: '0 0 0 1px rgba(200, 154, 76, 0.16), 0 30px 90px rgba(17, 23, 20, 0.18)',
      },
      borderRadius: {
        brand: '0.875rem',
        premium: '1.25rem',
      },
      keyframes: {
        'section-rise': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'section-rise': 'section-rise 680ms ease-out both',
        'soft-pulse': 'soft-pulse 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
