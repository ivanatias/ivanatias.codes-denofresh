import { Handlers, PageProps } from '$fresh/server.ts'
import Layout from 'components/layout/index.tsx'
import MetaData from 'components/meta-data.tsx'
import Section from 'components/layout/section.tsx'
import Article from 'components/layout/article.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Link from 'components/link.tsx'
import { client } from 'lib/sanity-client.ts'
import { getImageDimensions } from 'sanity/asset-utils'
import { getWorkQuery } from 'utils/queries.ts'
import { WorkDetails } from 'models/works.d.ts'
import SVG from 'components/svg.tsx'

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

  const imagesWithDimensions = additionalImages.map(({ asset }) => ({
    id: asset._id,
    url: asset.url,
    dimensions: getImageDimensions(asset),
  }))

  return (
    <>
      <MetaData title={title} canonicalUrlPath={`/works/${slug.current}`} />
      <Layout>
        <Section>
          <Article>
            <div class='flex items-center gap-2'>
              <Link href='/works'>
                <h2 class='text(base 2xl:lg black dark:white) font-bold'>
                  Works
                </h2>
              </Link>
              <span
                class='text(sm black dark:white) font-semibold'
                aria-hidden={true}
              >
                |
              </span>
              <h3 class='text(base 2xl:lg pink-800 dark:pink-600) font-bold'>
                {title}
              </h3>
            </div>
            <Paragraph>
              {description}
            </Paragraph>
            <div class='flex(& col) text(sm 2xl:base black dark:white) gap-3 font-semibold'>
              <div class='flex items-center gap-3'>
                <span class='inline-block px-4 py-1 text(xs 2xl:sm white) bg(indigo-800 dark:indigo-600) font-semibold rounded-lg'>
                  Stack
                </span>
                <div class='flex(& wrap) items-center gap-1'>
                  {stack.map(({ _key, tech }) => (
                    <span
                      key={_key}
                      class='text(xs 2xl:sm black dark:gray-300) underline'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div class='flex(& col) gap-3 mt-2'>
                {workLinks.map(({ href, icon, label }) => (
                  <Link href={href} isExternal={true}>
                    <SVG
                      id={icon}
                      hidden={true}
                      className='w-5 h-5'
                    />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div class='grid(& cols-1) gap-8'>
              {imagesWithDimensions.map(({ url, id, dimensions }) => (
                <img
                  key={id}
                  src={url}
                  width={dimensions.width}
                  height={dimensions.height}
                  class='w-full h-auto rounded-lg'
                  loading='lazy'
                  decoding='async'
                  alt={`${title} - Project Snapshot`}
                />
              ))}
            </div>
          </Article>
        </Section>
      </Layout>
    </>
  )
}

export default Work
