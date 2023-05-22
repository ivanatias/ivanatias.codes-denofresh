import ThemeToggleButton from 'components/theme-toggle-btn.tsx'
import ThemeProvider from 'contexts/theme.tsx'

const ThemeToggle = () => (
  <ThemeProvider>
    <ThemeToggleButton />
  </ThemeProvider>
)

export default ThemeToggle
