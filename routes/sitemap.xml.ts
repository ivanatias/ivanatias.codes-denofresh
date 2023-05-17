import { SitemapContext } from 'https://deno.land/x/fresh_seo@0.2.1/mod.ts'
import type { Handlers } from '$fresh/server.ts'
import { getBlogArticles, getWorks } from 'services/content.ts'
import { BASE_URL } from 'constants/socials.ts'
import manifest from '../fresh.gen.ts'

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const sitemap = new SitemapContext(BASE_URL, manifest)

    const [works, blogPosts] = await Promise.all([
      getWorks(),
      getBlogArticles(),
    ])

    const blogPaths = blogPosts.map(({ slug }) => `/blog/${slug.current}`)
    const worksPaths = works.map(({ slug }) => `/works/${slug.current}`)

    const dynamicPaths = [...blogPaths, ...worksPaths]

    dynamicPaths.forEach((path) => sitemap.add(path))

    return sitemap.render()
  },
}
