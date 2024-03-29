import { type Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    '{routes,islands,components,utils}/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-rgba': 'rgba(249,250,251,0.15)',
        'dark-rgba': 'rgba(13,17,23,0.15)',
      },
    },
  },
  plugins: [],
} satisfies Config
