import { getImageDimensions } from 'sanity/asset-utils'
import { urlFor } from 'lib/sanity.ts'
import type { ArticleImage as ArticleImageType } from 'models/article.ts'

interface Props {
  image: ArticleImageType
  altText?: string
  caption?: string
}

const ArticleImage = (
  { image, altText = 'Article image', caption = '' }: Props,
) => {
  const { width, height } = getImageDimensions(image.asset)
  const imageUrl = urlFor(image.asset._ref).auto('format').url()

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
      <figcaption class='mt-1 text-xs text-slate-600 md:text-sm dark:text-slate-400'>
        {caption}
      </figcaption>
    </figure>
  )
}

export default ArticleImage

export type { Props }
