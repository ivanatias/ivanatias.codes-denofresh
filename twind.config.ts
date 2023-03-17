import { Options } from '$fresh/plugins/twind.ts'

export default {
  plugins: {
    'blur-backdrop': {
      backdropFilter: 'blur(6px)',
      backgroundColor: 'transparent',
    },
  },
  selfURL: import.meta.url,
  darkMode: 'class',
} as Options
