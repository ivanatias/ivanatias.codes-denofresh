import type { RouteContext } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import HeadTag from 'components/head-tag.tsx'
import Article from 'components/layout/article.tsx'
import ArticleHeader from 'components/pages/blog-article/article-header.tsx'
import ArticleFooter from 'components/pages/blog-article/article-footer.tsx'
import TableOfContent from 'components/pages/blog-article/table-of-content.tsx'
import BlocksRenderer from 'components/blocks-renderer.tsx'
import { DB_TYPES, getNotionPageContent } from 'lib/notion.ts'
import { previewSuffix, removePreviewSuffixFromPath } from 'lib/og-images.ts'
import { extractArticleMetadata } from 'utils/notion.ts'
import { extractHeadings } from 'utils/helpers.ts'

const BlogArticle = async (req: Request, ctx: RouteContext) => {
  const { slug } = ctx.params
  const { origin, pathname } = new URL(req.url)
  const page = await getNotionPageContent(
    removePreviewSuffixFromPath(slug),
    DB_TYPES.BLOG,
  )

  if (page === null) return ctx.renderNotFound()

  const { content, foundPage, nextPageTitle, prevPageTitle } = page
  const metadata = extractArticleMetadata(foundPage)
  const headings = extractHeadings(content)

  return (
    <>
      <HeadTag
        title={metadata.title}
        canonicalUrlPath={`/blog/${slug}`}
        description={metadata.description}
        socialCardImage={`${origin}/${pathname}${previewSuffix}`}
        contentType='article'
      />
      <Wrapper showHeader={false}>
        <Article>
          {headings.length > 0 && <TableOfContent headings={headings} />}
          <ArticleHeader
            coverImageUrl={metadata.coverImageUrl}
            imageAttribution={metadata.imageAttribution}
            title={metadata.title}
            publishDate={metadata.publishedAt}
            readingTime={metadata.readingTime}
            tags={metadata.tags}
          />

          {content.map((c) => <BlocksRenderer key={c.id} block={c} />)}

          <ArticleFooter
            articleSlug={slug}
            prevPageTitle={prevPageTitle}
            nextPageTitle={nextPageTitle}
          />
        </Article>
      </Wrapper>
    </>
  )
}

export default BlogArticle
