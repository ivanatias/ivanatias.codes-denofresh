import { useState } from 'preact/hooks'
import Link from 'components/link.tsx'
import { Menu, MenuButton } from 'components/menu.tsx'
import Navlink from 'components/nav-link.tsx'
import ThemeProvider from 'contexts/theme.tsx'
import ThemeToggleButton from 'components/theme-toggle.tsx'
import { links } from 'constants/links.ts'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <header class='fixed top-0 z-50 w-full py-3 bg(white dark:[#020105])'>
      <nav>
        <div class='flex items-center max-w-[824px] mx-auto px(4 md:5)'>
          <div class='flex(& 1) items-center gap-5'>
            <Link href='/' className='pt-2'>
              <img
                src='/logo.svg'
                alt='Ivan Atias Logo'
                width='50'
                height='50'
                decoding='async'
              />
            </Link>
            <ul class='hidden md:flex md:items-center md:gap-3'>
              {links.map(({ path, label, ...item }) => (
                <li key={label}>
                  <Navlink href={path} {...item}>
                    {label}
                  </Navlink>
                </li>
              ))}
            </ul>
          </div>
          <div class='flex items-center gap-2'>
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
