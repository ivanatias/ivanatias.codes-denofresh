import type { Handlers, PageProps } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import HeadTag from 'components/head-tag.tsx'
import Article from 'components/layout/article.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Stack from 'components/pages/work-article/stack.tsx'
import WorkLinks from 'components/pages/work-article/work-links.tsx'
import WorkImages from 'components/pages/work-article/work-images.tsx'
import { getWork } from 'services/content.ts'
import { getImagesWithDimensions } from 'utils/helpers.ts'

type Props = NonNullable<Awaited<ReturnType<typeof getWork>>>

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const { slug } = ctx.params
    const work = await getWork(slug)

    return work === null ? ctx.renderNotFound() : ctx.render(work)
  },
}

const Work = ({ data }: PageProps<Props>) => {
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
        <Article>
          <header>
            <h3 class='text-base md:text-lg text-pink-800 dark:text-pink-400 font-bold'>
              {title}
            </h3>
          </header>
          <Paragraph>
            {description}
          </Paragraph>
          <div class='flex flex-col text-xs md:text-sm text-slate-800 dark:text-slate-100 gap-3 font-semibold'>
            <Stack stack={stack} />
            <WorkLinks workLinks={workLinks} />
          </div>
          <WorkImages
            imagesWithDimensions={imagesWithDimensions}
            workTitle={title}
          />
        </Article>
      </Wrapper>
    </>
  )
}

export default Work
