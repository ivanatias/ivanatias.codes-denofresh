import { IS_BROWSER } from '$fresh/runtime.ts'
import { effect, useSignal } from '@preact/signals'
import ThemeToggleButton from 'components/theme-toggle-btn.tsx'

const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const STORAGE_KEY = 'ivanatias-theme'
const MATCH_MEDIA = '(prefers-color-scheme: dark)'

let initialTheme = Theme.LIGHT

if (IS_BROWSER) {
  const storedMode = window.localStorage.getItem(STORAGE_KEY)
  const matches = window.matchMedia(MATCH_MEDIA).matches
  const userPreference = matches ? Theme.DARK : Theme.LIGHT

  initialTheme = storedMode === null ? userPreference : storedMode as Theme
}

const ThemeToggle = () => {
  const theme = useSignal(initialTheme)

  const toggleTheme = () => {
    theme.value = theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK
  }

  effect(() => {
    if (IS_BROWSER) {
      const mediaQueryList = window.matchMedia(MATCH_MEDIA)

      const handleMediaChange = (event: MediaQueryListEvent) => {
        theme.value = event.matches ? Theme.DARK : Theme.LIGHT
      }

      mediaQueryList.addEventListener('change', handleMediaChange)
    }
  })

  effect(() => {
    if (IS_BROWSER) {
      window.localStorage.setItem(STORAGE_KEY, theme.value)
      document.documentElement.classList.add(theme.value)
      document.documentElement.classList.remove(
        theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK,
      )
    }
  })

  return <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
}

export default ThemeToggle

export { type Theme }
