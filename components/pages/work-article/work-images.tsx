import type { ImageWithDimensions } from 'utils/helpers.ts'

interface Props {
  imagesWithDimensions: ImageWithDimensions[]
  workTitle: string
}

const WorkImages = ({ imagesWithDimensions, workTitle }: Props) => (
  <ul class='grid grid-cols-1 gap-8'>
    {imagesWithDimensions.map(({ url, id, dimensions }) => (
      <li key={id}>
        <img
          src={url}
          width={dimensions.width}
          height={dimensions.height}
          class='w-full h-auto rounded-lg'
          loading='lazy'
          decoding='async'
          alt={`${workTitle} - Project Snapshot`}
        />
      </li>
    ))}
  </ul>
)

export default WorkImages
