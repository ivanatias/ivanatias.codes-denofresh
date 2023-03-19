import Link from 'components/link.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import type { Blog } from 'models/blogs.d.ts'
import { formatDate } from 'utils/helpers.ts'

type Props = Omit<Blog, '_id'>

const BlogCard = (
  { articleTitle, coverImage, excerpt, publishDate, slug }: Props,
) => {
  const { altText, image: { asset: { url } } } = coverImage
  const date = formatDate(publishDate)

  return (
    <Link
      href={`/blog/${slug.current}`}
      className='flex w-full gap-5 p-4 transition duration-300 border(& transparent) hover:border-indigo-800 dark:hover:border-indigo-400 rounded-md'
    >
      <img
        src={url}
        alt={altText}
        width='48'
        height='48'
        class='flex-shrink-0 w-12 h-12'
        decoding='async'
        loading='lazy'
      />
      <div class='flex(& col) gap-1'>
        <Title titleTag='h3' titleClass='small'>
          {articleTitle}
        </Title>
        <Paragraph pClass='small'>{excerpt}</Paragraph>
        <time
          dateTime={publishDate}
          class='text(pink-800 dark:pink-400 xs 2xl:sm) font-semibold'
        >
          {date}
        </time>
      </div>
    </Link>
  )
}

export default BlogCard
