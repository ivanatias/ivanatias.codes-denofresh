import { IS_BROWSER } from '$fresh/runtime.ts'
import { ComponentChildren, createContext } from 'preact'
import { useContext, useEffect, useState } from 'preact/hooks'

const STORAGE_KEY = 'ivanatias-theme'
const MATCH_MEDIA = '(prefers-color-scheme: dark)'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const useThemeContext = (storageKey = STORAGE_KEY) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (!IS_BROWSER) return Theme.LIGHT

    const storedMode = window.localStorage.getItem(storageKey)
    return storedMode === null
      ? (window.matchMedia(MATCH_MEDIA).matches ? Theme.DARK : Theme.LIGHT)
      : storedMode as Theme
  })

  const toggleTheme = () =>
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(MATCH_MEDIA)
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? Theme.DARK : Theme.LIGHT)
    }

    mediaQueryList.addEventListener('change', handleMediaChange)

    return () => mediaQueryList.removeEventListener('change', handleMediaChange)
  }, [])

  useEffect(() => {
    window.localStorage.setItem(storageKey, theme)
    document.documentElement.classList.add(theme)
    document.documentElement.classList.remove(
      theme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
    )
  }, [storageKey, theme])

  return { theme, toggleTheme }
}

const ThemeContext = createContext<
  ReturnType<typeof useThemeContext> | undefined
>(undefined)

const ThemeProvider = (
  { children }: { children: ComponentChildren },
) => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a child of ThemeProvider')
  }

  return context
}

export default ThemeProvider

export { type Theme, useTheme }
