import type { Handlers, PageProps } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import HeadTag from 'components/head-tag.tsx'
import Section from 'components/layout/section.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import ArticleCard from 'components/article-card.tsx'
import { client } from 'lib/sanity-client.ts'
import type { Blog } from 'models/blogs.d.ts'
import { getBlogQuery } from 'utils/queries.ts'

export const handler: Handlers<Blog[]> = {
  async GET(_req, ctx) {
    const blogQuery = getBlogQuery()
    const blog = await client.fetch<Blog[]>(blogQuery)
    return ctx.render(blog)
  },
}

const Blog = ({ data }: PageProps<Blog[]>) => (
  <>
    <HeadTag title='Blog' canonicalUrlPath='/blog' />
    <Wrapper>
      <Section>
        <header className='flex(& col) gap-4'>
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
          <div className='grid(& cols-1 sm:cols-2) sm:gap-6 gap-8'>
            {data.map(({ _id, ...item }) => (
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
