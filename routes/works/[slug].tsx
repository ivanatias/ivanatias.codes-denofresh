import type { Handlers, PageProps } from '$fresh/server.ts'
import Layout from 'components/layout/index.tsx'
import MetaData from 'components/meta-data.tsx'
import Section from 'components/layout/section.tsx'
import Article from 'components/layout/article.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import WorkHeader from 'components/pages/works/work-header.tsx'
import Stack from 'components/pages/works/stack.tsx'
import WorkLinks from 'components/pages/works/work-links.tsx'
import WorkImages from 'components/pages/works/work-images.tsx'
import { client } from 'lib/sanity-client.ts'
import { getWorkQuery } from 'utils/queries.ts'
import { getImagesWithDimensions } from 'utils/helpers.ts'
import type { WorkDetails } from 'models/works.d.ts'

export const handler: Handlers<WorkDetails> = {
  async GET(_req, ctx) {
    const { slug } = ctx.params
    const workQuery = getWorkQuery(slug)

    const work = await client.fetch<WorkDetails>(workQuery)

    return work === null ? ctx.renderNotFound() : ctx.render(work)
  },
}

const Work = ({ data }: PageProps<WorkDetails>) => {
  const {
    title,
    description,
    additionalImages,
    githubUrl,
    projectUrl,
    stack,
    slug,
  } = data

  const workLinks = [
    {
      href: githubUrl,
      icon: 'icon-github',
      label: 'Source code',
    },
    {
      href: projectUrl,
      icon: 'icon-eye',
      label: 'Live project',
    },
  ]

  const imagesWithDimensions = getImagesWithDimensions(additionalImages)

  return (
    <>
      <MetaData title={title} canonicalUrlPath={`/works/${slug.current}`} />
      <Layout>
        <Section>
          <Article>
            <WorkHeader title={title} />
            <Paragraph>
              {description}
            </Paragraph>
            <div class='flex(& col) text(xs md:sm black dark:white) gap-3 font-semibold'>
              <Stack stack={stack} />
              <WorkLinks workLinks={workLinks} />
            </div>
            <WorkImages
              imagesWithDimensions={imagesWithDimensions}
              workTitle={title}
            />
          </Article>
        </Section>
      </Layout>
    </>
  )
}

export default Work
