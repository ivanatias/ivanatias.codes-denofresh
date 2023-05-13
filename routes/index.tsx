import type { Handlers, PageProps } from '$fresh/server.ts'
import Layout from 'components/layout/index.tsx'
import Section from 'components/layout/section.tsx'
import About from 'components/pages/home/about.tsx'
import Works from 'components/pages/home/works.tsx'
import LatestArticles from 'components/pages/home/latest-articles.tsx'
import Skills from 'components/pages/home/skills.tsx'
import HeadTag from 'components/head-tag.tsx'
import { client } from 'lib/sanity-client.ts'
import type { Biography } from 'models/biography.d.ts'
import type { Work } from 'models/works.d.ts'
import type { Blog } from 'models/blogs.d.ts'
import {
  getBiographyQuery,
  getBlogQuery,
  getWorksQuery,
} from 'utils/queries.ts'

interface Props {
  biography: Biography[]
  works: Work[]
  latestArticles: Blog[]
}

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const biographyQuery = getBiographyQuery()
    const worksQuery = getWorksQuery()
    const blogQuery = getBlogQuery()

    const [biography, works, articles] = await Promise.all([
      client.fetch<Biography[]>(biographyQuery),
      client.fetch<Work[]>(worksQuery),
      client.fetch<Blog[]>(blogQuery),
    ])

    return ctx.render({
      biography,
      works,
      latestArticles: articles.slice(0, 2),
    })
  },
}

const Home = (
  { data: { biography, works, latestArticles } }: PageProps<Props>,
) => (
  <>
    <HeadTag />
    <Layout>
      <Section className='grid(& cols-1) gap-16'>
        <About biography={biography} />
        <Works works={works} />
        <Skills />
        <LatestArticles latestArticles={latestArticles} />
      </Section>
    </Layout>
  </>
)

export default Home
