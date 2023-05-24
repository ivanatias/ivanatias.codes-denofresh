import type { ComponentChildren } from 'preact'
import Paragraph from 'components/layout/paragraph.tsx'
import Heading from 'components/sanity-block-contents/article-heading.tsx'
import Link from 'components/link.tsx'
import CustomCode from 'components/sanity-block-contents/custom-code.tsx'
import CopyCode from 'islands/copy-code.tsx'
import ArticleImage, {
  type Props as ArticleImageType,
} from 'components/sanity-block-contents/article-image.tsx'
import { slugify } from 'utils/helpers.ts'

interface Code {
  code: {
    code: string
    filename?: string
    language: string
  }
}

interface LinkType {
  isExternal: boolean
  href: string
  children: string
}

const serializers = {
  container: ({ children }: { children: ComponentChildren }) => (
    <div class='flex(& col) w-full gap-5'>{children}</div>
  ),

  h2: ({ children }: { children: string[] }) => (
    <Heading heading='h2' titleClass='xl' id={slugify(children[0])}>
      {children[0]}
    </Heading>
  ),

  h3: ({ children }: { children: string[] }) => (
    <Heading heading='h3' titleClass='lg' id={slugify(children[0])}>
      {children[0]}
    </Heading>
  ),

  h4: ({ children }: { children: string[] }) => (
    <Heading heading='h4' titleClass='normal' id={slugify(children[0])}>
      {children[0]}
    </Heading>
  ),

  normal: ({ children }: { children: string }) => (
    <Paragraph>{children}</Paragraph>
  ),

  blockquote: ({ children }: { children: string }) => (
    <blockquote class='pl-2 text(sm black md:base dark:gray-100) italic border(l-2 pink-800 dark:pink-400)'>
      {children}
    </blockquote>
  ),

  em: ({ children }: { children: string }) => (
    <em>
      {children}
    </em>
  ),

  strong: ({ children }: { children: string }) => (
    <strong class='font-bold'>{children}</strong>
  ),

  ul: ({ children }: { children: ComponentChildren }) => (
    <ul
      class='flex(& col) gap-2 pl-3'
      style={{ listStyleType: 'disc' }}
    >
      {children}
    </ul>
  ),

  ol: ({ children }: { children: ComponentChildren }) => (
    <ol
      class='flex(& col) gap-2 pl-3'
      style={{ listStyleType: 'number' }}
    >
      {children}
    </ol>
  ),

  li: ({ children }: { children: string }) => (
    <li class='text(base black dark:gray-300 md:lg)'>
      {children}
    </li>
  ),

  code: ({ children }: { children: string }) => (
    <code class='px-2 rounded-lg font-bold font-mono text(sm md:base gray-700 dark:gray-100) border(& [1px] gray-300 dark:gray-700) bg(& gray-100 dark:gray-800)'>
      {children}
    </code>
  ),

  link: (props: LinkType) => {
    const { children, ...restOfProps } = props

    return (
      <Link
        className='text(base md:lg pink-800 dark:pink-400) underline'
        {...restOfProps}
      >
        {children}
      </Link>
    )
  },

  customCode: (props: Code) => {
    const { code: { code, filename = '', language } } = props

    return (
      <div class='relative my-5'>
        <div class='border(& [1px] gray-500 dark:gray-700) rounded-t-lg bg(& gray-700 dark:gray-800) py-1 px-3 text(xs gray-100 center) min-w-[90px] min-h-[26px] w-min font-semibold'>
          {filename}
        </div>
        <CustomCode code={code} language={language} />
        <CopyCode code={code} />
      </div>
    )
  },

  articleImage: (props: ArticleImageType) => {
    const { altText, caption, image } = props
    return <ArticleImage image={image} altText={altText} caption={caption} />
  },
}

export { serializers }
