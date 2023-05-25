import type { SanityImageDimensions } from 'sanity/asset-utils'

interface ImageWithDimensions {
  id: string
  url: string
  dimensions: SanityImageDimensions
}

interface Props {
  imagesWithDimensions: ImageWithDimensions[]
  workTitle: string
}

const WorkImages = ({ imagesWithDimensions, workTitle }: Props) => (
  <div class='grid-cols-1 gap-8'>
    {imagesWithDimensions.map(({ url, id, dimensions }) => (
      <img
        key={id}
        src={url}
        width={dimensions.width}
        height={dimensions.height}
        class='w-full h-auto rounded-lg'
        loading='lazy'
        decoding='async'
        alt={`${workTitle} - Project Snapshot`}
      />
    ))}
  </div>
)

export default WorkImages
