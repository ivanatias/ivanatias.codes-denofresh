import Link from 'components/link.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Article from 'components/layout/article.tsx'
import type { Blog } from 'models/blog.ts'
import { formatDate, truncateText } from 'utils/helpers.ts'

type Props = Omit<Blog, '_id'>

const ArticleCard = (
  { articleTitle, coverImage, excerpt, publishDate, slug }: Props,
) => {
  const { altText, image: { asset: { url } } } = coverImage
  const date = formatDate(publishDate)
  const truncatedExcerpt = truncateText(excerpt, 120)

  return (
    <Link
      href={`/blog/${slug.current}`}
      className=''
    >
      <Article className='flex flex-col sm:min-h-[300px] w-full gap-5 p-4 transition duration-300 border border-transparent hover:border-indigo-600 dark:hover:border-indigo-400 rounded-md md:hover:scale-105'>
        <img
          src={url}
          alt={altText}
          width='64'
          height='64'
          class='flex-shrink-0 w-16 h-16'
          decoding='async'
          loading='lazy'
        />
        <div class='flex flex-col gap-1'>
          <Title titleTag='h3' titleClass='small'>
            {articleTitle}
          </Title>
          <Paragraph pClass='small'>{truncatedExcerpt}</Paragraph>
          <time
            dateTime={publishDate}
            class='text-pink-800 dark:text-pink-400 text-xs 2xl:text-sm font-semibold'
          >
            {date}
          </time>
        </div>
      </Article>
    </Link>
  )
}

export default ArticleCard
