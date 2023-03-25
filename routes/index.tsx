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

const Home = ({ data }: PageProps<Biography[]>) => (
  <>
    <HeadTag />
    <Layout>
      <Section>
        <Article>
          <Title titleTag='h2' titleClass='lg'>
            Work
          </Title>
          <Paragraph>
            I&apos;m a Front-end Engineer and UI Designer who enjoys a lot
            building and designing good looking and functional websites and
            apps. These days, most of my work revolves around technologies such
            as React.js, Next.js, Gatsby.js and recently, React Native. I&apos;m
            also comfortable using CSS technologies such as Sass, Bootstrap,
            Material UI and TailwindCSS. For my designs, Figma is my predilect
            design and prototyping tool.
          </Paragraph>
          <LinkButton href='/works'>
            My portfolio
          </LinkButton>
        </Article>
        <Article>
          <Title titleTag='h2' titleClass='lg'>
            Skills
          </Title>
          <Paragraph>
            These are some of the technologies and tools I&apos;m comfortable
            with:
          </Paragraph>
          <Skills />
        </Article>
        <Article>
          <Title titleTag='h2' titleClass='lg'>
            Biography
          </Title>
          {data.map(({ _id, ...item }) => (
            <BiographyItem
              key={_id}
              {...item}
            />
          ))}
        </Article>
        <Article>
          <Title titleTag='h2' titleClass='lg'>
            Personal Blog
          </Title>
          <Paragraph>
            A space for sharing and expanding knowledge. I write about a wide
            variety of topics related to technology in this section, expressing
            my personal opinions on subjects such as web development, web
            performance, user interface design, and other miscellaneous ones.
            The aim of this blog is to document my journey as a Front-end
            Engineer and UI Designer one article at a time.
          </Paragraph>
          <LinkButton href='/blog'>
            See blog
          </LinkButton>
        </Article>
      </Section>
    </Layout>
  </>
)

export default Home
