import type { Options } from '$fresh/plugins/twind.ts'

export default {
  plugins: {
    'blur-backdrop': {
      backdropFilter: 'blur(8px)',
    },
  },
  theme: {
    extend: {
      colors: {
        'white-rgba': 'rgba(243, 244, 246, 0.35)',
        'dark-rgba': 'rgba(13, 17, 23, 0.15)',
      },
    },
  },
  selfURL: import.meta.url,
  darkMode: 'class',
} as Options
