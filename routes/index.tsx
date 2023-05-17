import type { Handlers, PageProps } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import Section from 'components/layout/section.tsx'
import About from 'components/pages/home/about.tsx'
import Works from 'components/pages/home/works.tsx'
import LatestArticles from 'components/pages/home/latest-articles.tsx'
import Packages from 'components/pages/home/packages.tsx'
import Skills from 'components/pages/home/skills.tsx'
import HeadTag from 'components/head-tag.tsx'
import { client } from 'lib/sanity-client.ts'
import type { Biography } from 'models/biography.d.ts'
import type { Work } from 'models/works.d.ts'
import type { Blog } from 'models/blogs.d.ts'
import type { Package } from 'models/packages.d.ts'
import {
  getBiographyQuery,
  getBlogQuery,
  getPackagesQuery,
  getWorksQuery,
} from 'utils/queries.ts'

interface Props {
  biography: Biography[]
  works: Work[]
  latestArticles: Blog[]
  packages: Package[]
}

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const biographyQuery = getBiographyQuery()
    const worksQuery = getWorksQuery()
    const blogQuery = getBlogQuery()
    const packagesQuery = getPackagesQuery()

    const [biography, works, articles, packages] = await Promise.all([
      client.fetch<Biography[]>(biographyQuery),
      client.fetch<Work[]>(worksQuery),
      client.fetch<Blog[]>(blogQuery),
      client.fetch<Package[]>(packagesQuery),
    ])

    console.log({ packages })

    return ctx.render({
      biography,
      works,
      latestArticles: articles.slice(0, 2),
      packages,
    })
  },
}

const Home = (
  { data: { biography, works, latestArticles, packages } }: PageProps<Props>,
) => (
  <>
    <HeadTag />
    <Wrapper>
      <Section className='grid(& cols-1) gap-16'>
        <About biography={biography} />
        <Works works={works} />
        <Packages packages={packages} />
        <Skills />
        <LatestArticles latestArticles={latestArticles} />
      </Section>
    </Wrapper>
  </>
)

export default Home
