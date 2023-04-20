import Link from 'components/link.tsx'
import Title from 'components/layout/title.tsx'
import Article from 'components/layout/article.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import { getImageDimensions } from 'sanity/asset-utils'
import type { Work } from 'models/works.d.ts'

type Props = Omit<Work, '_id'> & { index: number }

const WorkCard = ({ thumbNail, title, overview, slug, index }: Props) => {
  const { width, height } = getImageDimensions(thumbNail.asset)

  return (
    <Link
      href={`/works/${slug.current}`}
      className=''
    >
      <Article className='flex(& col) items-center justify-center lg:transition-transform lg:duration-300 lg:hover:scale-110'>
        <img
          src={thumbNail.asset.url}
          alt={title}
          width={width}
          height={height}
          class='w-full h-auto rounded-lg'
          decoding='async'
          loading={index > 1 ? 'lazy' : 'eager'}
        />
        <div class='flex(& col ) items-center justify-center w-full gap-1 mt-3'>
          <Title titleTag='h3' titleClass='small'>
            {title}
          </Title>
          <Paragraph pClass='small' centered>{overview}</Paragraph>
        </div>
      </Article>
    </Link>
  )
}

export default WorkCard
