import type { Handlers, PageProps } from '$fresh/server.ts'
import Layout from 'components/layout/index.tsx'
import MetaData from 'components/meta-data.tsx'
import Section from 'components/layout/section.tsx'
import Article from 'components/layout/article.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import BlogCard from 'components/article-card.tsx'
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
    <MetaData title='Blog' canonicalUrlPath='/blog' />
    <Layout>
      <Section>
        <Article>
          <Title titleTag='h2' titleClass='lg'>
            Blog
          </Title>
          <Paragraph>
            Writing about web development, web performance, UI design, my
            personal experiences in this field, or simply random thoughts that
            cross my mind.
          </Paragraph>
        </Article>
        <Article>
          <Title titleTag='h3' titleClass='normal'>
            Latest articles
          </Title>
          <Section className='grid(& cols-1) gap-8'>
            {data.map(({ _id, ...item }) => (
              <article key={_id}>
                <BlogCard {...item} />
              </article>
            ))}
          </Section>
        </Article>
      </Section>
    </Layout>
  </>
)

export default Blog
