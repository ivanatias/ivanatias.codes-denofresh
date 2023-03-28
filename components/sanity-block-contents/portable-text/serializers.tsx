import type { ComponentChildren } from 'preact'
import Paragraph from 'components/layout/paragraph.tsx'
import Title from 'components/layout/title.tsx'
import Link from 'components/link.tsx'
import CustomCode from 'components/sanity-block-contents/custom-code.tsx'
import ArticleImage, {
  type Props as ArticleImageType,
} from 'components/sanity-block-contents/article-image.tsx'
import { mapToLanguageLogo } from 'utils/helpers.ts'

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
    <div class='flex(& col) w-full gap-4'>{children}</div>
  ),

  h3: ({ children }: { children: string }) => (
    <Title titleTag='h3' titleClass='normal'>
      {children}
    </Title>
  ),

  h4: ({ children }: { children: string }) => (
    <Title titleTag='h4' titleClass='small'>
      {children}
    </Title>
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
    <code class='text(sm black dark:gray-300 md:base) bg(gray-200 dark:gray-800) px-1 italic tracking-tighter'>
      {children}
    </code>
  ),

  link: (props: LinkType) => {
    const { children, ...restOfProps } = props

    return (
      <Link
        {...restOfProps}
        className='text(base md:lg pink-800 dark:pink-400) underline'
      >
        {children}
      </Link>
    )
  },

  customCode: (props: Code) => {
    const { code: { code, filename = '', language } } = props
    const languageImageSrc = mapToLanguageLogo(language)

    return (
      <div class='my-5'>
        <div class='p-3 text(sm lg:base white) bg-indigo-600 flex justify-between items-center'>
          <span class='flex(& 1) font-mono italic tracking-tighter'>
            {filename}
          </span>
          {languageImageSrc !== undefined
            ? (
              <img
                src={languageImageSrc}
                alt='Logo of the programming language in code block'
                width={30}
                height={30}
                decoding='async'
                loading='lazy'
              />
            )
            : (
              <span class='font-semibold uppercase'>
                {language}
              </span>
            )}
        </div>
        <CustomCode code={code} language={language} />
      </div>
    )
  },

  articleImage: (props: ArticleImageType) => {
    const { altText, caption, image } = props
    return <ArticleImage image={image} altText={altText} caption={caption} />
  },
}

export { serializers }
