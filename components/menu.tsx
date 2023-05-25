import Navlink from 'components/nav-link.tsx'
import { LINKS } from 'constants/links.ts'
import { sharedMenuClasses } from 'utils/styling.ts'

interface MenuButtonProps {
  toggleMenu: () => void
  isActive: boolean
}

interface MenuLineProps extends Pick<MenuButtonProps, 'isActive'> {
  activeClass: string
}

const MenuPopup = () => (
  <div class='z-50 absolute bottom-[-128px] right-4 w-[200px] bg-slate-50 dark:bg-[#1C1B1F] py-5 px-4 rounded-lg shadow-md'>
    <ul class='flex flex-col justify-center w-full gap-2'>
      {LINKS.map(({ path, label, ...item }) => (
        <li key={label}>
          <Navlink href={path} {...item}>
            {label}
          </Navlink>
        </li>
      ))}
    </ul>
  </div>
)

const MenuButton = ({ toggleMenu, isActive }: MenuButtonProps) => (
  <button
    onClick={toggleMenu}
    class='flex flex-col justify-between items-center w-7 h-[22px] focus:outline-none'
    aria-expanded={isActive}
    aria-label={isActive ? 'Close nav menu' : 'Open nav menu'}
  >
    <MenuLine isActive={isActive} activeClass='rotate-45' />
    <MenuLine isActive={isActive} activeClass='opacity-0' />
    <MenuLine isActive={isActive} activeClass='-rotate-45' />
  </button>
)

const MenuLine = ({ isActive, activeClass }: MenuLineProps) => (
  <span
    class={`${sharedMenuClasses} ${isActive ? activeClass : ''}`}
    aria-hidden='true'
  />
)

export { MenuButton, MenuPopup }
