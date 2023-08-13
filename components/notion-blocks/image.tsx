interface Props {
  url: string
  caption?: string
}

const DEFAULT_CAPTION = 'Image that serves as a illustration for the article.'

const Image = (
  { url, caption = DEFAULT_CAPTION }: Props,
) => {
  return (
    <figure>
      <img
        src={url}
        width='400'
        height='400'
        alt={caption}
        class='w-full h-auto rounded-md'
        decoding='async'
        loading='lazy'
      />
      {caption !== DEFAULT_CAPTION && (
        <figcaption class='mt-1 text-xs text-slate-600 md:text-sm dark:text-slate-400'>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default Image
