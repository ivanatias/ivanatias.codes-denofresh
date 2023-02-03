import { Head } from '$fresh/runtime.ts'

const defaultTitle = 'Ivan Atias · Front-end Engineer, UI Designer'
const defaultDescription =
  'Ivan Atias is a Front-end Engineer and UI Designer who enjoys a lot building good looking and functional websites and apps.'
const defaultImage = 'https://www.ivanatias.codes/card.png'
const defaultOgType = 'website'

interface Props {
  title: string
  description: string
  canonicalUrlPath: string
  socialCardImage: string
  contentType: string
}

const MetaData = ({
  title,
  description,
  canonicalUrlPath,
  socialCardImage,
  contentType,
}: Partial<Props>) => {
  const mainTitle = title ? `${title} - Ivan Atias` : defaultTitle
  const ogType = contentType ?? defaultOgType
  const ogImage = socialCardImage ?? defaultImage
  const url = `https://www.ivanatias.codes${canonicalUrlPath ?? ''}`
  const desc = description ?? defaultDescription

  return (
    <Head>
      <title>{mainTitle}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='UTF-8' />
      <meta name='description' content={desc} />
      <meta
        name='keywords'
        content='Front-end Engineer, UI Designer, Ivan Atias, Portfolio, Blog'
      />
      <meta name='author' content='Ivan Atias' />
      <link
        rel='canonical'
        href={url}
      />
      <meta
        property='og:url'
        content={url}
      />
      <meta
        property='og:title'
        content={mainTitle}
      />
      <meta
        property='og:description'
        content={desc}
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:site_name' content='Ivan Atias Website' />
      <meta
        name='twitter:title'
        content={mainTitle}
      />
      <meta
        name='twitter:description'
        content={desc}
      />
      <meta
        name='image'
        property='og:image'
        content={ogImage}
      />
      <meta name='twitter:image' content={ogImage} />
      <meta property='og:type' content={ogType} />
    </Head>
  )
}

export default MetaData
