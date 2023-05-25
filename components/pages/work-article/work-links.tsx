import Link from 'components/link.tsx'
import SVG from 'components/svg.tsx'

interface WorkLink {
  href: string
  icon: string
  label: string
}

interface Props {
  workLinks: WorkLink[]
}

const WorkLinks = ({ workLinks }: Props) => (
  <div class='flex flex-col gap-3 mt-2'>
    {workLinks.map(({ href, icon, label }) => (
      <Link href={href} isExternal>
        <SVG
          id={icon}
          hidden={true}
          className='w-5 h-5'
        />
        {label}
      </Link>
    ))}
  </div>
)

export default WorkLinks
