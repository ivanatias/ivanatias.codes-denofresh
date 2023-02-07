import sanityClient from 'sanity/client'
import imageUrlBuilder from 'sanity/image-url'

const client = sanityClient({
  projectId: 'uaj0umn5',
  dataset: 'production',
  apiVersion: '2022-11-09',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

const urlFor = (source: string) => {
  return builder.image(source)
}

export { client, urlFor }
