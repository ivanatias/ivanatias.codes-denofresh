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
    class={`focus:outline-none z-10 text-pink-800 dark:text-pink-400 hover:drop-shadow-[0_0_12px_#be185d] dark:hover:drop-shadow-[0_0_12px_#ec4899] w-12 h-12 p-2 transition duration-300 border border-slate-400 dark:border-slate-700 rounded-full ${
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
