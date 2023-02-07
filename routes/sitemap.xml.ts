import { SitemapContext } from 'https://deno.land/x/fresh_seo@0.2.1/mod.ts'
import { Handlers } from '$fresh/server.ts'
import { client } from 'lib/sanity-client.ts'
import manifest from '../fresh.gen.ts'

const blogsQuery = '*[_type == "blog"] | order(_createdAt desc) { slug }'

const worksQuery = '*[_type == "work"] | order(_createdAt asc) { slug }'

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const sitemap = new SitemapContext('https://www.ivanatias.codes', manifest)

    const [blogPosts, works] = await Promise.all<
      { slug: { current: string } }[]
    >([
      client.fetch(blogsQuery),
      client.fetch(worksQuery),
    ])

    const blogPaths = blogPosts.map((post) => `/blog/${post.slug.current}`)

    const worksPaths = works.map((work) => `/works/${work.slug.current}`)

    const dynamicPaths = [...blogPaths, ...worksPaths]

    dynamicPaths.forEach((path) => sitemap.add(path))

    return sitemap.render()
  },
}
