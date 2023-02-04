import sanityClient, { SanityImageAssetDocument } from 'sanity/client'
import imageUrlBuilder from 'sanity/image-url'

const client = sanityClient({
  projectId: 'uaj0umn5',
  dataset: 'production',
  apiVersion: '2022-11-09',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

const urlFor = (source: SanityImageAssetDocument) => {
  return builder.image(source)
}

export { client, urlFor }
