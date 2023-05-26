import Title from 'components/layout/title.tsx'

interface Props {
  coverImageUrl: string
  imageAltText: string
  title: string
  publishDate: string
  formattedReadingTime: string
  formattedDate: string
}

const ArticleHeader = (
  {
    coverImageUrl,
    imageAltText,
    title,
    publishDate,
    formattedReadingTime,
    formattedDate,
  }: Props,
) => (
  <header class='flex flex-col gap-4'>
    <div class='flex flex-col w-full gap-3'>
      <img
        src={coverImageUrl}
        alt={imageAltText}
        width='80'
        height='80'
        class='flex-shrink-0 w-20 h-20'
      />
      <Title titleTag='h1' titleClass='xl'>
        {title}
      </Title>
    </div>
    <div class='flex text-xs md:text-sm text-slate-700 dark:text-slate-400 font-semibold items-center gap-3'>
      <time
        dateTime={publishDate}
      >
        {formattedDate}
      </time>
      <span class='underline'>
        {formattedReadingTime}
      </span>
    </div>
  </header>
)

export default ArticleHeader
