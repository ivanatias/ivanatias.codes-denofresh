import { asset, Head } from '$fresh/runtime.ts'
import type { JSX } from 'preact'
import { BASE_URL } from 'constants/socials.ts'

type LinkAttributes = JSX.HTMLAttributes<HTMLLinkElement>

interface Props {
  title: string
  description: string
  canonicalUrlPath: string
  socialCardImage: string
  contentType: string
  linkTags: LinkAttributes[]
}

const defaultTitle = 'Ivan Atias · Front-end Engineer, UI Designer'
const defaultDescription =
  'Ivan Atias is a Front-end Engineer and UI Designer who enjoys a lot building good looking and functional websites and apps.'
const defaultImage = `${BASE_URL}/card.png`
const defaultOgType = 'website'

const HeadTag = ({
  title,
  description,
  canonicalUrlPath,
  socialCardImage,
  contentType,
  linkTags,
}: Partial<Props>) => {
  const mainTitle = title ? `${title} - Ivan Atias` : defaultTitle
  const ogType = contentType ?? defaultOgType
  const ogImage = socialCardImage ?? defaultImage
  const url = `${BASE_URL}${canonicalUrlPath ?? ''}`
  const desc = description ?? defaultDescription
  const hasAdditionalLinkTags = linkTags !== undefined && linkTags.length > 0

  return (
    <Head>
      <title>{mainTitle}</title>
      <meta name='description' content={desc} />
      <meta name='author' content='Ivan Atias' />
      <meta
        name='keywords'
        content='Front-end Engineer, UI Designer, Ivan Atias, Portfolio, Blog'
      />
      <link rel='preload' href={asset('/logo.svg')} as='image' />
      <link rel='preload' href={asset('/profile-pic.webp')} as='image' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={asset('/icons/apple-icon-180x180.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href={asset('/icons/android-icon-192x192.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={asset('/icons/favicon-32x32.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href={asset('/icons/favicon-96x96.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={asset('/icons/favicon-16x16.png')}
      />
      {hasAdditionalLinkTags && linkTags.map((tag) => <link {...tag} />)}
      <link
        rel='canonical'
        href={url}
      />
      <meta property='og:site_name' content='Ivan Atias Website' />
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
      <meta property='og:type' content={ogType} />
      <meta
        name='image'
        property='og:image'
        content={ogImage}
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content={mainTitle}
      />
      <meta
        name='twitter:description'
        content={desc}
      />
      <meta name='twitter:image' content={ogImage} />
      <script id='theme' src='/scripts/theme.js' />
    </Head>
  )
}

export default HeadTag
