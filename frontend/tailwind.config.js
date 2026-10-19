import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0d0d12',
          900: '#12111a',
          850: '#181524',
          800: '#1f1a30',
          700: '#2c2543',
        },
        gold: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
        }
      },
      boxShadow: {
        'gold-neon': '0 0 15px -1px rgba(251, 191, 36, 0.45), 0 0 25px -2px rgba(245, 158, 11, 0.25)',
        'gold-neon-lg': '0 0 30px rgba(251, 191, 36, 0.35)',
        'gold-glow-subtle': '0 0 20px rgba(251, 191, 36, 0.12)',
      }
    },
  },
  plugins: [],
};
