import SVG from 'components/svg.tsx'
import Link from 'components/link.tsx'
import { SOCIAL_LINKS } from 'constants/socials.ts'

const Social = () => (
  <div class='flex items-center gap-1 text-pink-800 dark:text-pink-400'>
    {SOCIAL_LINKS.map(({ path, icon, name }) => (
      <Link
        key={name}
        href={path}
        isExternal
        className='transition duration-150 ease-in hover:text-pink-900 dark:hover:text-pink-500'
      >
        <SVG
          id={icon}
          title={`Ivan Atias' ${name} profile`}
          className='w-7 h-7'
        />
      </Link>
    ))}
  </div>
)

export default Social
