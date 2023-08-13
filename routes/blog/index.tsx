import type { RouteContext } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import HeadTag from 'components/head-tag.tsx'
import Section from 'components/layout/section.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import ArticleCard from 'components/article-card.tsx'
import { DB_TYPES, queryDatabase } from 'lib/notion.ts'
import {
  extractArticleMetadata,
  type PageObjectResponse,
} from 'utils/notion.ts'

const Blog = async (_req: Request, _ctx: RouteContext) => {
  const db = await queryDatabase(DB_TYPES.BLOG)
  const pages = db.results as PageObjectResponse[]

  const articles = pages.map((page) => extractArticleMetadata(page))

  return (
    <>
      <HeadTag title='Blog' canonicalUrlPath='/blog' />
      <Wrapper>
        <Section>
          <header class='flex flex-col gap-4'>
            <Title titleTag='h2' titleClass='lg'>
              Blog
            </Title>
            <Paragraph>
              Writing about web development, web performance, user interface
              design, my personal experiences in this field, or simply random
              thoughts that cross my mind.
            </Paragraph>
          </header>
          <Section className='flex flex-col gap-4'>
            <header>
              <Title titleTag='h3' titleClass='normal'>
                Articles
              </Title>
            </header>
            <ul class='grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-8'>
              {articles.map((item) => (
                <li key={item.id}>
                  <ArticleCard {...item} />
                </li>
              ))}
            </ul>
          </Section>
        </Section>
      </Wrapper>
    </>
  )
}

export default Blog
