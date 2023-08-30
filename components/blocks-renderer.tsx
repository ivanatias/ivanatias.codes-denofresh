import Heading from 'components/pages/blog-article/article-heading.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Code from 'components/notion-blocks/code.tsx'
import Text from 'components/notion-blocks/text.tsx'
import CopyCode from 'islands/copy-code.tsx'
import { slugify } from 'utils/helpers.ts'
import type { Block } from 'lib/notion.ts'
import type { TextRichTextItemResponse } from 'utils/notion.ts'

interface Props {
  block: Block
}

const BlocksRenderer = ({ block }: Props) => {
  const { type, id } = block

  switch (type) {
    case 'paragraph': {
      const item = block.paragraph.rich_text as TextRichTextItemResponse[]
      return (
        <Paragraph>
          <Text item={item} />
        </Paragraph>
      )
    }

    case 'heading_2': {
      const item = block.heading_2.rich_text as TextRichTextItemResponse[]
      const id = slugify(item.map(({ plain_text }) => plain_text).join(''))

      return (
        <Heading heading='h2' titleClass='xl' id={id}>
          <Text item={item} />
        </Heading>
      )
    }

    case 'heading_3': {
      const item = block.heading_3.rich_text as TextRichTextItemResponse[]
      const id = slugify(item.map(({ plain_text }) => plain_text).join(''))

      return (
        <Heading heading='h3' titleClass='lg' id={id}>
          <Text item={item} />
        </Heading>
      )
    }

    case 'bulleted_list': {
      const { children: { results } } = block.bulleted_list

      return (
        <ul
          class='flex flex-col gap-4 pl-3'
          style={{ listStyleType: 'disc' }}
        >
          {results.map((li) => <BlocksRenderer key={li.id} block={li} />)}
        </ul>
      )
    }

    case 'numbered_list': {
      const { children: { results } } = block.numbered_list

      return (
        <ol
          class='flex flex-col gap-4 pl-3'
          style={{ listStyleType: 'number' }}
        >
          {results.map((li) => <BlocksRenderer key={li.id} block={li} />)}
        </ol>
      )
    }

    case 'bulleted_list_item': {
      const item = block.bulleted_list_item
        .rich_text as TextRichTextItemResponse[]

      return (
        <li class='text-base text-slate-700 dark:text-slate-300 md:text-lg'>
          <Text item={item} />
        </li>
      )
    }

    case 'numbered_list_item': {
      const item = block.numbered_list_item
        .rich_text as TextRichTextItemResponse[]

      return (
        <li class='text-base text-slate-700 dark:text-slate-300 md:text-lg'>
          <Text item={item} />
        </li>
      )
    }

    case 'to_do': {
      const item = block.to_do
        .rich_text as TextRichTextItemResponse[]

      const checked = block.to_do.checked

      return (
        <div class='flex gap-2 text-white'>
          <input
            class='relative cursor-pointer peer appearance-none border-2 border-slate-500 dark:border-slate-200 mt-[6px] shrink-0 w-4 h-4 rounded-sm checked:bg-green-600 dark:checked:bg-green-500 checked:border-none'
            type='checkbox'
            id={id}
            checked={checked}
          />
          <label
            htmlFor={id}
            class='text-slate-700 dark:text-slate-300 text-base md:text-lg'
          >
            <Text item={item} />
          </label>
          <svg
            class='absolute w-4 h-4 mt-[6px] hidden peer-checked:block pointer-events-none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='4'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <polyline points='20 6 9 17 4 12'></polyline>
          </svg>
        </div>
      )
    }

    case 'toggle': {
      const item = block.toggle.rich_text as TextRichTextItemResponse[]

      const children = block.toggle.children.results

      return (
        <details class='border border-dashed border-slate-400 dark:border-slate-600 p-3 [&_svg]:-rotate-90 [&_svg]:open:rotate-0 rounded-lg'>
          <summary class='flex gap-2 items-center text-slate-700 dark:text-slate-300 text-base md:text-lg cursor-pointer list-none'>
            <svg
              class='text-pink-800 dark:text-pink-500 transition-transform duration-300'
              fill='none'
              height='20'
              width='20'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
            >
              <polyline points='6 9 12 15 18 9'></polyline>
            </svg>
            <Text item={item} />
          </summary>
          {children.map((child) => (
            <BlocksRenderer key={child.id} block={child} />
          ))}
        </details>
      )
    }

    case 'image': {
      const src = block.image.type === 'external'
        ? block.image.external.url
        : block.image.file.url

      const DEFAULT_CAPTION =
        'Image that serves as a illustration for the article.'

      const hasCaption = block.image.caption.length > 0

      const caption = hasCaption
        ? block.image.caption.map(({ plain_text }) => plain_text).join(' ')
        : DEFAULT_CAPTION

      const captionRichText = block.image.caption as TextRichTextItemResponse[]

      return (
        <figure class='my-5'>
          <img
            src={src}
            alt={caption}
            class='w-full h-auto rounded-md'
            decoding='async'
            loading='lazy'
          />
          {caption !== DEFAULT_CAPTION && (
            <figcaption class='mt-1 text-xs text-slate-600 md:text-sm dark:text-slate-400'>
              <Text item={captionRichText} />
            </figcaption>
          )}
        </figure>
      )
    }

    case 'code': {
      const code = block.code.rich_text[0].plain_text
      const language = block.code.language

      return (
        <div class='relative my-5'>
          <div class='border-[1px] rounded-t-lg bg-gray-800 dark:bg-gray-800/50 border-slate-500 dark:border-slate-700 w-[90px] h-[26px]' />
          <Code code={code} language={language} />
          <CopyCode code={code} />
        </div>
      )
    }

    case 'divider': {
      return <hr class='border-t-slate-300 dark:border-t-slate-700 my-5' />
    }

    case 'quote': {
      const item = block.quote.rich_text as TextRichTextItemResponse[]

      return (
        <blockquote class='pl-2 text-base text-slate-700 md:text-lg dark:text-slate-300 italic border-l-2 border-pink-800 dark:border-pink-400'>
          <Text item={item} />
        </blockquote>
      )
    }

    case 'callout': {
      const item = block.callout.rich_text as TextRichTextItemResponse[]

      const emoji = block.callout.icon?.type === 'emoji'
        ? block.callout.icon.emoji
        : ''

      return (
        <div class='p-3 bg-slate-200/40 border border-slate-300 dark:border-slate-700 dark:bg-slate-700/30 text-slate-700 dark:text-slate-300 text-base md:text-lg rounded-lg'>
          {emoji !== '' && <span class='text-xl'>{emoji}</span>}
          <p class={emoji !== '' ? 'pl-6' : ''}>
            <Text item={item} />
          </p>
        </div>
      )
    }

    default: {
      return (
        <Paragraph>
          ❌ Unsupported block{'  '}
          {type === 'unsupported' ? 'unsupported by Notion API' : type}
        </Paragraph>
      )
    }
  }
}

export default BlocksRenderer
