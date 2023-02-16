import SVG from 'components/svg.tsx'
import Link from 'components/link.tsx'
import { socialLinks } from 'constants/socials.ts'

const Social = () => (
  <div class='flex items-center gap-1 text(pink-800 dark:pink-600)'>
    {socialLinks.map(({ path, icon, name }) => (
      <Link
        key={name}
        href={path}
        isExternal={true}
        className='transition duration-150 ease-in hover:text(pink-900 dark:pink-500)'
      >
        <SVG
          id={icon}
          title={`Ivan Atias' ${name} profile`}
          className='w-7 h-7'
        />
        <span class='sr-only'>opens a new window</span>
      </Link>
    ))}
  </div>
)

export default Social
