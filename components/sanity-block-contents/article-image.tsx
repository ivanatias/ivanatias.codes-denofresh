import { getImageDimensions } from 'sanity/asset-utils'
import { urlFor } from 'lib/sanity-client.ts'
import { ArticleImage } from 'models/article.d.ts'

interface Props {
  image: ArticleImage
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
      <figcaption class='mt-1 text(sm black 2xl:base dark:gray-300)'>
        {caption}
      </figcaption>
    </figure>
  )
}

export default ArticleImage

export type { Props }