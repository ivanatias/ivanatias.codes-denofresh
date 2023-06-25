import { type ClientConfig, createClient } from 'sanity/client'
import imageUrlBuilder from 'sanity/image-url'

const SANITY_TOKEN = Deno.env.get('SANITY_TOKEN')

if (SANITY_TOKEN === undefined) {
  throw new Error('SANITY_TOKEN must be set')
}

const config: ClientConfig = {
  projectId: 'uaj0umn5',
  dataset: 'production',
  apiVersion: '2023-06-24',
  token: Deno.env.get('SANITY_TOKEN'),
  useCdn: true,
}

const client = createClient(config)

const builder = imageUrlBuilder(client)

const urlFor = (source: string) => {
  return builder.image(source)
}

export { client, urlFor }
