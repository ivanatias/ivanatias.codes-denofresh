import type { Handlers, PageProps } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import HeadTag from 'components/head-tag.tsx'
import Section from 'components/layout/section.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import ArticleCard from 'components/article-card.tsx'
import { getBlogArticles } from 'services/content.ts'
import type { Blog } from 'models/blogs.d.ts'

type Props = Awaited<ReturnType<typeof getBlogArticles>>

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const blogArticles = await getBlogArticles()

    return ctx.render(blogArticles)
  },
}

const Blog = ({ data: blogArticles }: PageProps<Blog[]>) => (
  <>
    <HeadTag title='Blog' canonicalUrlPath='/blog' />
    <Wrapper>
      <Section>
        <header class='flex(& col) gap-4'>
          <Title titleTag='h2' titleClass='lg'>
            Blog
          </Title>
          <Paragraph>
            Writing about web development, web performance, user interface
            design, my personal experiences in this field, or simply random
            thoughts that cross my mind.
          </Paragraph>
        </header>
        <Section className='flex(& col) gap-4'>
          <header>
            <Title titleTag='h3' titleClass='normal'>
              Articles
            </Title>
          </header>
          <div class='grid(& cols-1 sm:cols-2) sm:gap-6 gap-8'>
            {blogArticles.map(({ _id, ...item }) => (
              <ArticleCard
                key={_id}
                {...item}
              />
            ))}
          </div>
        </Section>
      </Section>
    </Wrapper>
  </>
)

export default Blog
