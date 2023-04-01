import { useState } from 'preact/hooks'
import { IS_BROWSER } from '$fresh/runtime.ts'

interface Props {
  code: string
}

const CopyCode = ({ code }: Props) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (codeToCopy: string) => {
    try {
      await window.navigator.clipboard.writeText(codeToCopy)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 5000)
    } catch {
      setCopied(false)
      console.error('Error copying code block')
    }
  }

  return (
    <button
      class={`${
        copied
          ? 'cursor-not-allowed text-white bg-pink-700'
          : 'cursor-copy hover:border-white hover:text-white text-gray-300'
      } absolute text(sm center) transition duration-150 ease-in tracking-tighter top-[54px] right-0 px-3 py-1`}
      disabled={!IS_BROWSER || copied}
      onClick={() => handleCopy(code)}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default CopyCode
