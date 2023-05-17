import { asset } from '$fresh/runtime.ts'
import type { Handlers, PageProps } from '$fresh/server.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import HeadTag from 'components/head-tag.tsx'
import Article from 'components/layout/article.tsx'
import ArticleHeader from 'components/pages/blog-article/article-header.tsx'
import ArticleFooter from 'components/pages/blog-article/article-footer.tsx'
import CustomPortableText from 'components/sanity-block-contents/portable-text/custom-portabletext.tsx'
import { getBlogArticle } from 'services/content.ts'
import { formatDate, formatReadingTime } from 'utils/helpers.ts'

type Props = NonNullable<Awaited<ReturnType<typeof getBlogArticle>>>

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const { slug } = ctx.params
    const articleContent = await getBlogArticle(slug)

    return articleContent === null
      ? ctx.renderNotFound()
      : ctx.render(articleContent)
  },
}

const BlogArticle = ({ data }: PageProps<Props>) => {
  const {
    blogArticle: { previousPost, currentPost, nextPost },
    readingTime: { estimatedReadingTime },
  } = data

  const {
    articleTitle,
    articleBody,
    coverImage,
    publishDate,
    slug,
    socialShareImage,
    excerpt,
  } = currentPost

  const { altText, image: { asset: { url: coverImageUrl } } } = coverImage
  const { asset: { url: socialImageUrl } } = socialShareImage

  const formattedDate = formatDate(publishDate)
  const formattedReadingTime = formatReadingTime(estimatedReadingTime)

  return (
    <>
      <HeadTag
        title={articleTitle}
        canonicalUrlPath={`/blog/${slug.current}`}
        description={excerpt}
        socialCardImage={socialImageUrl}
        contentType='article'
        linkTags={[
          {
            rel: 'stylesheet',
            href: asset('/styles/prism-theme.css'),
          },
        ]}
      />
      <Wrapper>
        <Article>
          <ArticleHeader
            coverImageUrl={coverImageUrl}
            imageAltText={altText}
            title={articleTitle}
            publishDate={publishDate}
            formattedReadingTime={formattedReadingTime}
            formattedDate={formattedDate}
          />
          <CustomPortableText articleBody={articleBody} />
          <ArticleFooter
            previousPost={previousPost}
            nextPost={nextPost}
            postSlug={slug.current}
          />
        </Article>
      </Wrapper>
    </>
  )
}

export default BlogArticle
