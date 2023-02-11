import { getImageDimensions } from 'sanity/asset-utils'
import { urlFor } from 'lib/sanity-client.ts'
import { ArticleImage as ArticleImageType } from 'models/article.d.ts'

interface Props {
  image: ArticleImageType
  altText?: string
  caption?: string
}

const ArticleImage = (
  { image, altText = 'Article image', caption = '' }: Props,
) => {
  const { width, height } = getImageDimensions(image.asset)
  const imageUrl = urlFor(image.asset._ref).url()
  return (
    <figure>
      <img
        src={imageUrl}
        width={width}
        height={height}
        alt={altText}
        class='w-full h-auto rounded-md '
        decoding='async'
        loading='lazy'
      />
      <figcaption class='mt-1 text(xs black md:sm dark:gray-300)'>
        {caption}
      </figcaption>
    </figure>
  )
}

export default ArticleImage

export type { Props }
