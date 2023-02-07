import { IS_BROWSER } from '$fresh/runtime.ts'
import SVG from 'components/svg.tsx'

interface Props {
  toggleShareButton: () => void
  isActive: boolean
}

const ShareButton = ({ toggleShareButton, isActive }: Props) => (
  <button
    aria-label='Share button'
    aria-expanded={isActive}
    class={`focus:outline-none z-10 text(pink-800 dark:pink-600) hover:text-pink-700 dark:hover:text-pink-500 w-12 h-12 p-2 transition-transform duration-300 ease-in border(& gray-400 dark:gray-700) rounded-full ${
      isActive && 'scale-75'
    }`}
    onClick={toggleShareButton}
    disabled={!IS_BROWSER}
  >
    <SVG
      id='icon-share'
      hidden
      title='Share article'
      className='w-6 h-6'
    />
  </button>
)

export default ShareButton
