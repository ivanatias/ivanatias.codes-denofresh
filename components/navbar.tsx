import Link from 'components/link.tsx'
import MobileMenu from 'islands/mobile-menu.tsx'
import ThemeToggle from 'islands/theme-toggle.tsx'
import Navlink from 'components/nav-link.tsx'
import { LINKS } from 'constants/links.ts'

const Navbar = () => (
  <header class='fixed top-0 z-50 w-full py-5 bg-light-rgba dark:bg-dark-rgba backdrop-blur-sm'>
    <nav>
      <div class='flex items-center max-w-3xl mx-auto px-4 md:px-5'>
        <div class='flex flex-1 items-center gap-5'>
          <Link href='/'>
            <img
              src='/logo.svg'
              alt='Ivan Atias Logo'
              width='50'
              height='50'
              decoding='async'
            />
          </Link>
          <ul class='hidden md:flex md:items-center md:gap-3'>
            {LINKS.map(({ path, label, ...item }) => (
              <li key={label}>
                <Navlink href={path} {...item}>
                  {label}
                </Navlink>
              </li>
            ))}
          </ul>
        </div>
        <div class='flex items-center gap-2'>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  </header>
)

export default Navbar
