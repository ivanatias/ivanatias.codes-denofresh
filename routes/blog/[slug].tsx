import { asset } from '$fresh/runtime.ts'
import type { Handlers, PageProps } from '$fresh/server.ts'
import Layout from 'components/layout/index.tsx'
import HeadTag from 'components/head-tag.tsx'
import Section from 'components/layout/section.tsx'
import Article from 'components/layout/article.tsx'
import ArticleHeader from 'components/pages/blog/article-header.tsx'
import Link from 'components/link.tsx'
import CustomPortableText from 'components/sanity-block-contents/portable-text/custom-portabletext.tsx'
import Share from 'islands/socialmedia-share.tsx'
import { client } from 'lib/sanity-client.ts'
import { getBlogPostQuery, getBlogPostReadingTimeQuery } from 'utils/queries.ts'
import type { ArticleReadingTime, BlogArticle } from 'models/article.d.ts'
import { formatDate, formatReadingTime } from 'utils/helpers.ts'

interface Props extends BlogArticle {
  readingTime: ArticleReadingTime
}

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const { slug } = ctx.params
    const blogPostQuery = getBlogPostQuery(slug)
    const readingTimeQuery = getBlogPostReadingTimeQuery(slug)

    const [blogPost, readingTime] = await Promise.all([
      client.fetch<BlogArticle>(blogPostQuery),
      client.fetch<ArticleReadingTime>(readingTimeQuery),
    ])

    return blogPost === null || readingTime === null
      ? ctx.renderNotFound()
      : ctx.render({ ...blogPost, readingTime })
  },
}

const BlogPost = ({ data }: PageProps<Props>) => {
  const {
    currentPost,
    previousPost,
    nextPost,
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
        linkTags={[{
          rel: 'stylesheet',
          href: asset('/styles/prism-theme.css'),
        }]}
      />
      <Layout>
        <Section>
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
            <div class='flex items-center justify-center mt-10 gap-4'>
              {previousPost !== null && (
                <Link href={`/blog/${previousPost.slug.current}`}>
                  Previous article
                </Link>
              )}
              {nextPost !== null && (
                <Link href={`/blog/${nextPost.slug.current}`}>
                  Next article
                </Link>
              )}
            </div>
            <Share slug={slug.current} />
          </Article>
        </Section>
      </Layout>
    </>
  )
}

export default BlogPost
