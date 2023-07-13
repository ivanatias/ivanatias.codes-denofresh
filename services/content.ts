import { client } from 'lib/sanity.ts'
import {
  getBiographyQuery,
  getBlogArticleQuery,
  getBlogArticleReadingTimeQuery,
  getBlogQuery,
  getPackagesQuery,
  getWorkQuery,
  getWorksQuery,
} from 'utils/queries.ts'
import type { Biography } from 'models/biography.ts'
import type { ArticleReadingTime, BlogArticle } from 'models/article.ts'
import type { Blog } from 'models/blog.ts'
import type { Work, WorkDetails } from 'models/works.ts'
import type { Package } from 'models/packages.ts'

const getBiography = (): Promise<Biography[]> => {
  return client.fetch(getBiographyQuery())
}

const getWorks = (): Promise<Work[]> => {
  return client.fetch(getWorksQuery())
}

const getBlogArticles = (): Promise<Blog[]> => {
  return client.fetch(getBlogQuery())
}

const getPackages = (): Promise<Package[]> => {
  return client.fetch(getPackagesQuery())
}

const getBlogArticle = async (
  slug: string,
): Promise<
  { blogArticle: BlogArticle; readingTime: ArticleReadingTime } | null
> => {
  const article = await Promise.all([
    client.fetch(getBlogArticleQuery(slug)),
    client.fetch(getBlogArticleReadingTimeQuery(slug)),
  ])

  return article.filter(Boolean).length > 0
    ? { blogArticle: article[0], readingTime: article[1] }
    : null
}

const getWork = (slug: string): Promise<WorkDetails | null> => {
  return client.fetch(getWorkQuery(slug))
}

const getHomeContent = async () => {
  const [biography, works, blogArticles, packages] = await Promise.all([
    getBiography(),
    getWorks(),
    getBlogArticles(),
    getPackages(),
  ])

  return {
    biography,
    works,
    latestArticles: blogArticles.slice(0, 2),
    packages,
  }
}

export {
  getBiography,
  getBlogArticle,
  getBlogArticles,
  getHomeContent,
  getPackages,
  getWork,
  getWorks,
}
