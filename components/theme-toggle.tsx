import { IS_BROWSER } from '$fresh/runtime.ts'
import SVG from 'components/svg.tsx'
import { type Theme, useTheme } from 'contexts/theme.tsx'

type ThemeIcon = 'icon-sun' | 'icon-moon'

interface ThemeOptions {
  label: string
  iconLabel: string
  icon: ThemeIcon
}

const themeOptions: Record<Theme, ThemeOptions> = {
  dark: { label: 'Light mode', icon: 'icon-sun', iconLabel: 'Sun icon' },
  light: { label: 'Dark mode', icon: 'icon-moon', iconLabel: 'Moon icon' },
}

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()
  const { icon, iconLabel, label } = themeOptions[theme]

  return (
    <button
      class={`flex items-center justify-center w-12 h-10 transition duration-150 ease-in hover:(text-yellow-500 dark:text-yellow-400) focus:outline-none text(yellow-400 dark:yellow-300) ${
        !IS_BROWSER && 'hidden'
      }`}
      onClick={toggleTheme}
      aria-label={label}
      disabled={!IS_BROWSER}
    >
      <SVG id={icon} title={iconLabel} className='w-6 h-6' />
    </button>
  )
}

export default ThemeToggleButton
