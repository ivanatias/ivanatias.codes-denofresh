import type { Handlers, PageProps } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import Section from 'components/layout/section.tsx'
import About from 'components/pages/home/about.tsx'
import Works from 'components/pages/home/works.tsx'
import LatestArticles from 'components/pages/home/latest-articles.tsx'
import Packages from 'components/pages/home/packages.tsx'
import Skills from 'components/pages/home/skills.tsx'
import HeadTag from 'components/head-tag.tsx'
import { getHomeContent } from 'services/content.ts'

type Props = Awaited<ReturnType<typeof getHomeContent>>

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const homeContent = await getHomeContent()

    return ctx.render(homeContent)
  },
}

const Home = (
  { data: { biography, works, latestArticles, packages } }: PageProps<Props>,
) => (
  <>
    <HeadTag />
    <Wrapper>
      <Section className='grid grid-cols-1 gap-16'>
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
