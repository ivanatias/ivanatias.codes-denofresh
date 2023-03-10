import { Handlers, PageProps } from '$fresh/server.ts'
import Layout from 'components/layout/index.tsx'
import MetaData from 'components/meta-data.tsx'
import Section from 'components/layout/section.tsx'
import Article from 'components/layout/article.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import WorkCard from 'components/work-card.tsx'
import { client } from 'lib/sanity-client.ts'
import { getWorksQuery } from 'utils/queries.ts'
import { Work } from 'models/works.d.ts'

export const handler: Handlers<Work[]> = {
  async GET(_req, ctx) {
    const worksQuery = getWorksQuery()
    const works = await client.fetch<Work[]>(worksQuery)
    return ctx.render(works)
  },
}

const Works = ({ data }: PageProps<Work[]>) => (
  <>
    <MetaData title='Works' canonicalUrlPath='/works' />
    <Layout>
      <Section>
        <Article>
          <Title titleTag='h2' titleClass='lg'>
            Works
          </Title>
          <Paragraph>
            These are some of my favorite projects that I have built, each one
            of them taught me different things during their development process.
          </Paragraph>
        </Article>
        <Article>
          <Section className='grid(& cols-1 md:cols-2) gap-8'>
            {data.map(({ _id, ...work }) => (
              <article key={_id}>
                <WorkCard {...work} />
              </article>
            ))}
          </Section>
        </Article>
      </Section>
    </Layout>
  </>
)

export default Works
