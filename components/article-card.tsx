import Link from 'components/link.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Article from 'components/layout/article.tsx'
import { truncateText } from 'utils/helpers.ts'
import { slugify } from 'utils/helpers.ts'
import { type BlogArticleEntry } from 'utils/notion.ts'

type Props = BlogArticleEntry

const ArticleCard = (
  { title, publishedAt, description, coverImageUrl }: Props,
) => {
  const truncDescription = truncateText(description, 120)

  return (
    <Link
      href={`/blog/${slugify(title)}`}
      className=''
    >
      <Article className='flex flex-col w-full gap-5 p-4 transition duration-300 border border-transparent hover:border-indigo-600 dark:hover:border-indigo-400 rounded-md md:hover:scale-105'>
        <img
          src={coverImageUrl}
          alt={title}
          class='aspect-[1.5] rounded-[3px] w-full'
          decoding='async'
          loading='lazy'
        />
        <div class='flex flex-col gap-1'>
          <Title titleTag='h3' titleClass='small'>
            {title}
          </Title>
          <Paragraph pClass='small'>{truncDescription}</Paragraph>
          <time
            dateTime={publishedAt}
            class='text-pink-800 dark:text-pink-400 text-xs 2xl:text-sm font-semibold'
          >
            {publishedAt}
          </time>
        </div>
      </Article>
    </Link>
  )
}

export default ArticleCard
