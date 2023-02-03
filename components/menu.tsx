import Link from 'components/link.tsx'
import { links } from 'constants/links.ts'
import { sharedMenuClasses } from 'utils/styling.ts'

interface MenuButtonProps {
	toggleMenu: () => void
	isActive: boolean
}

type MenuProps = Pick<MenuButtonProps, 'toggleMenu'>

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

const Menu = ({ toggleMenu }: MenuProps) => (
	<div class='z-50 absolute bottom-[-120px] right-4 w-[200px] bg(white dark:neutral-800) py-5 px-4 rounded-lg shadow(& md dark:gray-600) md:hidden transition-opacity duration-300 ease-in'>
		<ul class='flex(& col) justify-center w-full gap-2'>
			{links.map(({ path, label }) => (
				<li key={label}>
					<Link href={path}>
						{label}
					</Link>
				</li>
			))}
		</ul>
	</div>
)

export { Menu, MenuButton }
