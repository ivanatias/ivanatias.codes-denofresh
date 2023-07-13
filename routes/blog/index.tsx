import type { Handlers, PageProps } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import HeadTag from 'components/head-tag.tsx'
import Section from 'components/layout/section.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import ArticleCard from 'components/article-card.tsx'
import { type BlogArticlesContent, getBlogArticles } from 'services/content.ts'

type Props = BlogArticlesContent

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const blogArticles = await getBlogArticles()

    return ctx.render(blogArticles)
  },
}

const Blog = ({ data: blogArticles }: PageProps<Props>) => (
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
            {blogArticles.map(({ _id, ...item }) => (
              <li key={_id}>
                <ArticleCard key={_id} {...item} />
              </li>
            ))}
          </ul>
        </Section>
      </Section>
    </Wrapper>
  </>
)

export default Blog
