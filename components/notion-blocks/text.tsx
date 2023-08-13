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
              ? 'px-2 rounded-lg font-bold font-mono text-sm md:text-base text-slate-700 dark:text-slate-100 border-[1px] border-slate-300 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900'
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
