import { useSignal } from '@preact/signals'
import { IS_BROWSER } from '$fresh/runtime.ts'
import { CopiedIcon, CopyIcon } from 'components/icons.tsx'
import { copyToClipboard } from 'utils/helpers.ts'

interface Props {
  code: string
}

const CopyCode = ({ code }: Props) => {
  const copied = useSignal(false)

  const handleCopy = async () => {
    try {
      await copyToClipboard(code)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 5000)
    } catch {
      console.error('Error copying code to clipboard')
    }
  }

  return (
    <button
      class={`${
        copied.value
          ? 'cursor-not-allowed text-green-400'
          : 'cursor-copy hover:text-white text-slate-300'
      } absolute text-sm text-center transition duration-150 ease-in tracking-tighter top-[32px] right-[8px] px-3 py-1`}
      disabled={!IS_BROWSER || copied.value}
      onClick={handleCopy}
      aria-label={copied.value ? 'Copied' : 'Copy code to clipboard'}
    >
      {copied.value ? <CopiedIcon /> : <CopyIcon />}
    </button>
  )
}

export default CopyCode
