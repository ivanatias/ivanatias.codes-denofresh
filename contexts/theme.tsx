import { IS_BROWSER } from '$fresh/runtime.ts'
import { ComponentChildren, createContext } from 'preact'
import { useContext, useEffect, useState } from 'preact/hooks'

const STORAGE_KEY = 'ivanatias-theme'
const MATCH_MEDIA = '(prefers-color-scheme: dark)'

enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

interface ThemeContextType {
	toggleTheme: () => void
	theme: string
}

interface ProviderProps {
	children: ComponentChildren
	storageKey?: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const useTheme = () => {
	const context = useContext(ThemeContext)

	if (context === undefined) {
		throw new Error('useTheme must be used within a child of ThemeProvider')
	}

	return context
}

const ThemeProvider = (
	{ children, storageKey = STORAGE_KEY }: ProviderProps,
) => {
	const [theme, setTheme] = useState(() => {
		if (!IS_BROWSER) return Theme.LIGHT

		const storedMode = window.localStorage.getItem(STORAGE_KEY)
		return storedMode === null
			? (window.matchMedia(MATCH_MEDIA).matches ? Theme.DARK : Theme.LIGHT)
			: storedMode
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

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider

export { useTheme }
