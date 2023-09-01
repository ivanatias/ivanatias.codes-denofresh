import Link from 'components/link.tsx'
import type { TextRichTextItemResponse } from 'utils/notion.ts'

interface Props {
  item: TextRichTextItemResponse[]
}

const Text = ({ item }: Props) => (
  <>
    {item.map(({ text, annotations }, index) => {
      const { bold, code, italic, strikethrough, underline, color } =
        annotations

      const { content, link } = text

      return (
        <span
          key={index}
          class={[
            bold ? 'font-bold' : '',
            italic ? 'italic' : '',
            strikethrough ? 'line-through' : '',
            underline ? 'underline' : '',
            code
              ? 'rounded-sm bg-slate-200/70 dark:bg-gray-800/50 font-bold text-xs md:text-sm text-indigo-600 dark:text-indigo-400 py-[2px] px-2 font-mono'
              : '',
          ].join(' ')}
          style={color === 'default' ? {} : { color }}
        >
          {link !== null
            ? (
              <Link
                href={link.url}
                isExternal
                className='text-base md:text-lg text-pink-800 dark:text-pink-400 underline hover:text-pink-900 dark:hover:text-pink-500 transition-colors duration-150'
              >
                {content}
              </Link>
            )
            : content}
        </span>
      )
    })}
  </>
)

export default Text
