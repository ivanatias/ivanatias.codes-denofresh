import Navlink from 'components/nav-link.tsx'
import { links } from 'constants/links.ts'
import { sharedMenuClasses } from 'utils/styling.ts'

interface MenuButtonProps {
  toggleMenu: () => void
  isActive: boolean
}

const MenuButton = ({ toggleMenu, isActive }: MenuButtonProps) => (
  <button
    onClick={toggleMenu}
    class='flex(& col) justify-between items-center w-7 h-[22px] md:hidden focus:outline-none'
    aria-expanded={isActive}
    aria-label={isActive ? 'Close nav menu' : 'Open nav menu'}
  >
    <span
      class={`${sharedMenuClasses} ${isActive && 'rotate-45'}`}
      aria-hidden={true}
    />
    <span
      class={`${sharedMenuClasses} ${isActive && 'opacity-0'}`}
      aria-hidden={true}
    />
    <span
      class={`${sharedMenuClasses} ${isActive && '-rotate-45'}`}
      aria-hidden={true}
    />
  </button>
)

const Menu = () => (
  <div class='z-50 absolute bottom-[-150px] right-4 w-[200px] bg(gray-50 dark:[#1C1B1F]) py-5 px-4 rounded-lg shadow-md md:hidden'>
    <ul class='flex(& col) justify-center w-full gap-2'>
      {links.map(({ path, label, ...item }) => (
        <li key={label}>
          <Navlink href={path} {...item}>
            {label}
          </Navlink>
        </li>
      ))}
    </ul>
  </div>
)

export { Menu, MenuButton }
