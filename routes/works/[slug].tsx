import type { Handlers, PageProps } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import HeadTag from 'components/head-tag.tsx'
import Section from 'components/layout/section.tsx'
import Article from 'components/layout/article.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Stack from 'components/pages/work-article/stack.tsx'
import WorkLinks from 'components/pages/work-article/work-links.tsx'
import WorkImages from 'components/pages/work-article/work-images.tsx'
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
      <HeadTag title={title} canonicalUrlPath={`/works/${slug.current}`} />
      <Wrapper>
        <Section>
          <Article>
            <h3 class='text(base md:lg pink-800 dark:pink-400) font-bold'>
              {title}
            </h3>
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
      </Wrapper>
    </>
  )
}

export default Work
