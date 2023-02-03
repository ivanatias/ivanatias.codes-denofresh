import { useState } from 'preact/hooks'
import Link from 'components/link.tsx'
import { Menu, MenuButton } from 'components/menu.tsx'
import ThemeProvider from 'contexts/theme.tsx'
import ThemeToggleButton from 'components/theme-toggle.tsx'
import { links } from 'constants/links.ts'

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => setMenuOpen((prev) => !prev)

	return (
		<header class='fixed top-0 z-50 w-full py-3'>
			<nav>
				<div class='flex items-center justify-between max-w-[824px] mx-auto px(4 md:5)'>
					<div class='flex items-center gap-4'>
						<div class='flex items-center'>
							<Link href='/' className='pt-2'>
								<img
									src='/logo.svg'
									alt='Ivan Atias Logo'
									width={50}
									height={50}
								/>
							</Link>
						</div>
						<ul class='hidden md:flex md:items-center md:gap-2'>
							{links.map(({ path, label }) => (
								<li key={label}>
									<Link href={path}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div class='flex(& 1) items-center justify-end gap-4'>
						<ThemeProvider>
							<ThemeToggleButton />
						</ThemeProvider>
						<MenuButton toggleMenu={toggleMenu} isActive={menuOpen} />
					</div>
					{menuOpen && <Menu />}
				</div>
			</nav>
		</header>
	)
}

export default Navbar
