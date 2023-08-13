import Title from 'components/layout/title.tsx'
import Link from 'components/link.tsx'

interface ImageAttribution {
  content: string
  link: string
}
interface Props {
  coverImageUrl: string
  imageAttribution: ImageAttribution
  title: string
  publishDate: string
  readingTime: string
  tags: string[]
}

const ArticleHeader = (
  {
    coverImageUrl,
    imageAttribution,
    title,
    publishDate,
    readingTime,
    tags,
  }: Props,
) => {
  const alt =
    `Cover image for the article. Credits to ${imageAttribution.content}`

  return (
    <header class='flex flex-col gap-4'>
      <div class='flex flex-col w-full gap-8'>
        <figure class='flex flex-col items-center gap-2 text-slate-700 dark:text-slate-300 w-full'>
          <img
            src={coverImageUrl}
            alt={alt}
            class='rounded-md w-full aspect-[1.5]'
          />
          <figcaption class='text-xs md:text-sm text-center'>
            Photo by{' '}
            <Link
              href={imageAttribution.link}
              isExternal
              className='text-pink-800 dark:text-pink-500'
            >
              {imageAttribution.content}
            </Link>
          </figcaption>
        </figure>
        <Title titleTag='h1' titleClass='xl'>
          {title}
        </Title>
      </div>
      <div class='flex text-xs md:text-sm text-slate-700 dark:text-slate-400 font-semibold items-center gap-3'>
        <time
          dateTime={new Date(publishDate).toISOString()}
        >
          {publishDate}
        </time>
        <span class='underline'>
          {readingTime}
        </span>
      </div>
      <ul class='flex items-center flex-wrap gap-3'>
        {tags.map((tag, index) => (
          <li
            key={index}
            class='px-2 py-1 rounded-full bg-indigo-600 text-center text-white font-semibold text-xs'
          >
            {tag}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default ArticleHeader
