import type { Handlers, PageProps } from '$fresh/server.ts'
import Layout from 'components/layout/index.tsx'
import HeadTag from 'components/head-tag.tsx'
import Section from 'components/layout/section.tsx'
import Article from 'components/layout/article.tsx'
import Title from 'components/layout/title.tsx'
import LinkButton from 'components/link-btn.tsx'
import Skills from 'components/skills.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import BiographyItem from 'components/biography-item.tsx'
import { client } from 'lib/sanity-client.ts'
import { getBiographyQuery } from 'utils/queries.ts'
import type { Biography } from 'models/biography.d.ts'

export const handler: Handlers<Biography[]> = {
  async GET(_req, ctx) {
    const biographyQuery = getBiographyQuery()
    const biography = await client.fetch<Biography[]>(biographyQuery)
    return ctx.render(biography)
  },
}

const Home = ({ data: biography }: PageProps<Biography[]>) => (
  <>
    <HeadTag />
    <Layout>
      <Section>
        <Section>
          <Article>
            <header>
              <Title titleTag='h2' titleClass='lg'>
                Work
              </Title>
            </header>
            <Paragraph>
              I enjoy a lot building and designing visually appealing,
              functional, performant websites and apps. These days, most of my
              work revolves around technologies such as React.js, Next.js,
              Gatsby.js and recently, React Native. I&apos;m also comfortable
              using CSS technologies such as Sass, Bootstrap, Material UI and
              TailwindCSS. For my designs, Figma is my predilect design and
              prototyping tool.
            </Paragraph>
            <LinkButton href='/works'>
              My portfolio
            </LinkButton>
          </Article>
        </Section>
        <Section>
          <Article>
            <header>
              <Title titleTag='h2' titleClass='lg'>
                Skills
              </Title>
            </header>
            <Paragraph>
              These are some of the technologies and tools I&apos;m comfortable
              with:
            </Paragraph>
            <Skills />
          </Article>
        </Section>
        <Section>
          <Article>
            <header>
              <Title titleTag='h2' titleClass='lg'>
                Biography
              </Title>
            </header>
            {biography.map(({ _id, ...item }) => (
              <BiographyItem
                key={_id}
                {...item}
              />
            ))}
          </Article>
        </Section>
        <Section>
          <Article>
            <header>
              <Title titleTag='h2' titleClass='lg'>
                Personal Blog
              </Title>
            </header>
            <Paragraph>
              In this section, my goal is to share and expand knowledge on
              various technology topics. I write about web development, web
              performance, user interface design, and other related subjects.
            </Paragraph>
            <LinkButton href='/blog'>
              See blog
            </LinkButton>
          </Article>
        </Section>
      </Section>
    </Layout>
  </>
)

export default Home
