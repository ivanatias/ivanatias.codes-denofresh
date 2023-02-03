import SVG from 'components/svg.tsx'
import { useTheme } from 'contexts/theme.tsx'

type ThemeIcon = 'icon-sun' | 'icon-moon'

interface ThemeOptions {
	label: string
	iconLabel: string
	icon: ThemeIcon
}

const themeOptions: Record<string, ThemeOptions> = {
	dark: { label: 'Light mode', icon: 'icon-sun', iconLabel: 'Sun icon' },
	light: { label: 'Dark mode', icon: 'icon-moon', iconLabel: 'Moon icon' },
}

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme()
	const { icon, iconLabel, label } = themeOptions[theme]

	return (
		<button
			class='flex items-center justify-center w-12 h-10 hover:drop-shadow-[0_0_12px] focus:outline-none text(yellow-400 dark:orange-400)'
			onClick={toggleTheme}
			aria-label={label}
		>
			<SVG id={icon} title={iconLabel} className='w-6 h-6' />
		</button>
	)
}

export default ThemeToggleButton
