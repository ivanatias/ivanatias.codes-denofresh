import SVG from 'components/svg.tsx'
import Link from 'components/link.tsx'
import { BASE_URL_BLOG } from 'constants/socials.ts'
import {
  calculateIconLeftPosition,
  calculateIconTransition,
} from 'utils/helpers.ts'

interface Props {
  slug: string
  isActive: boolean
  toggleShareButton: () => void
  position: number
  icon: string
  outlet: string
  label: string
}

const ShareIcon = (
  { slug, isActive, toggleShareButton, position, icon, outlet, label }: Props,
) => {
  const transition = calculateIconTransition(position, 50)
  const activeLeft = calculateIconLeftPosition(position, 40)
  const left = isActive ? activeLeft : 0
  const opacity = isActive ? 1 : 0
  const top = isActive ? '60px' : 0
  const pointerEvents = isActive ? 'auto' : 'none'

  return (
    <Link
      href={`${outlet}${BASE_URL_BLOG}/${slug}`}
      isExternal
      onClick={toggleShareButton}
      className='absolute z-0 transform-none'
      styles={{
        transition,
        left,
        opacity,
        top,
        pointerEvents,
      }}
    >
      <SVG
        id={icon}
        title={`Share article on ${label}`}
        className='w-9 h-9'
      />
    </Link>
  )
}

export default ShareIcon
