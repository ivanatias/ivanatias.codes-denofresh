import sanityClient from 'sanity/client'
import imageUrlBuilder from 'sanity/image-url'

const client = sanityClient({
  projectId: 'uaj0umn5',
  dataset: 'production',
  apiVersion: '2023-02-11',
  token: Deno.env.get('SANITY_TOKEN'),
  useCdn: true,
})

const builder = imageUrlBuilder(client)

const urlFor = (source: string) => {
  return builder.image(source)
}

export { client, urlFor }
