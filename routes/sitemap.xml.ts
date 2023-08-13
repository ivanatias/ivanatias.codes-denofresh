import { SitemapContext } from 'https://deno.land/x/fresh_seo@0.2.1/mod.ts'
import type { Handlers } from '$fresh/server.ts'
import { DB_TYPES, queryDatabase } from 'lib/notion.ts'
import {
  extractArticleMetadata,
  extractProjectMetadata,
  type PageObjectResponse,
} from 'utils/notion.ts'
import { slugify } from 'utils/helpers.ts'
import { BASE_URL } from 'constants/socials.ts'
import manifest from '../fresh.gen.ts'

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const sitemap = new SitemapContext(BASE_URL, manifest)

    const [blogDB, projectsDB] = await Promise.all([
      queryDatabase(DB_TYPES.BLOG),
      queryDatabase(DB_TYPES.PROJECTS),
    ])

    const blogArticlesPages = blogDB.results as PageObjectResponse[]
    const projectsPages = projectsDB.results as PageObjectResponse[]

    const articlesPaths = blogArticlesPages.map((page) => {
      const { title } = extractArticleMetadata(page)
      return `/blog/${slugify(title)}`
    })

    const worksPaths = projectsPages.map((page) => {
      const { title } = extractProjectMetadata(page)
      return `/works/${slugify(title)}`
    })

    const dynamicPaths = [...articlesPaths, ...worksPaths]

    dynamicPaths.forEach((path) => sitemap.add(path))

    return sitemap.render()
  },
}
