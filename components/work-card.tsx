import Link from 'components/link.tsx'
import Title from 'components/layout/title.tsx'
import Article from 'components/layout/article.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import { slugify } from 'utils/helpers.ts'
import type { ProjectArticleEntry } from 'utils/notion.ts'

type Props = ProjectArticleEntry

const WorkCard = ({ title, coverImageUrl, description }: Props) => {
  return (
    <Link
      href={`/works/${slugify(title)}`}
      className=''
    >
      <Article className='flex flex-col items-center justify-center md:transition-transform md:duration-300 md:hover:scale-105'>
        <img
          src={coverImageUrl}
          alt={title}
          class='w-full rounded-lg aspect-video'
          decoding='async'
          loading='lazy'
        />
        <div class='flex flex-col items-center justify-center w-full gap-1 mt-3'>
          <Title titleTag='h3' titleClass='small'>
            {title}
          </Title>
          <Paragraph pClass='small' centered>{description}</Paragraph>
        </div>
      </Article>
    </Link>
  )
}

export default WorkCard
