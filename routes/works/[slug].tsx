import type { RouteContext } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import HeadTag from 'components/head-tag.tsx'
import Article from 'components/layout/article.tsx'
import BlocksRenderer from 'components/blocks-renderer.tsx'
import PageSwitch from 'components/page-switch.tsx'
import { DB_TYPES, getNotionPageContent } from 'lib/notion.ts'
import { extractProjectMetadata } from 'utils/notion.ts'

const Work = async (_req: Request, ctx: RouteContext) => {
  const { slug } = ctx.params

  const page = await getNotionPageContent(slug, DB_TYPES.PROJECTS)

  if (page === null) return ctx.renderNotFound()

  const { content, foundPage, nextPageTitle, prevPageTitle } = page

  const { title } = extractProjectMetadata(foundPage)

  return (
    <>
      <HeadTag title={title} canonicalUrlPath={`/works/${slug}`} />
      <Wrapper>
        <Article>
          <header>
            <h2 class='text-3xl md:text-4xl text-indigo-700 dark:text-indigo-400 font-bold'>
              {title}
            </h2>
          </header>

          {content.map((c) => <BlocksRenderer key={c.id} block={c} />)}

          <footer class='mt-10'>
            <PageSwitch
              prevPageTitle={prevPageTitle}
              nextPageTitle={nextPageTitle}
              type='project'
            />
          </footer>
        </Article>
      </Wrapper>
    </>
  )
}

export default Work
