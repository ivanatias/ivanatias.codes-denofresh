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
  <>
    <div class='flex(& col) w-full gap-3'>
      <img
        src={coverImageUrl}
        alt={imageAltText}
        width='56'
        height='56'
        class='flex-shrink-0 w-14 h-14'
        decoding='async'
      />
      <Title titleTag='h2' titleClass='lg'>
        {title}
      </Title>
    </div>
    <div class='flex text(xs md:sm black dark:gray-400) items-center gap-3'>
      <time
        dateTime={publishDate}
      >
        {formattedDate}
      </time>
      <span class='underline'>
        {formattedReadingTime}
      </span>
    </div>
  </>
)

export default ArticleHeader
