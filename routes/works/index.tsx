import type { Handlers, PageProps } from '$fresh/server.ts'
import Layout from 'components/layout/index.tsx'
import HeadTag from 'components/head-tag.tsx'
import Section from 'components/layout/section.tsx'
import Title from 'components/layout/title.tsx'
import WorkCard from 'components/work-card.tsx'
import { client } from 'lib/sanity-client.ts'
import { getWorksQuery } from 'utils/queries.ts'
import type { Work } from 'models/works.d.ts'

export const handler: Handlers<Work[]> = {
  async GET(_req, ctx) {
    const worksQuery = getWorksQuery()
    const works = await client.fetch<Work[]>(worksQuery)
    return ctx.render(works)
  },
}

const Works = ({ data: works }: PageProps<Work[]>) => (
  <>
    <HeadTag title='Works' canonicalUrlPath='/works' />
    <Layout>
      <Section>
        <header className='flex(& col) gap-4'>
          <Title titleTag='h2' titleClass='lg'>
            Works
          </Title>
        </header>
        <div className='grid(& cols-1 md:cols-2) gap-8'>
          {works.map(({ _id, ...work }) => <WorkCard key={_id} {...work} />)}
        </div>
      </Section>
    </Layout>
  </>
)

export default Works
