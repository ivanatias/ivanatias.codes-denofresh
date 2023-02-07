import { Head } from '$fresh/runtime.ts'
import { Handlers, PageProps } from '$fresh/server.ts'
import Layout from 'components/layout/index.tsx'
import MetaData from 'components/meta-data.tsx'
import Section from 'components/layout/section.tsx'
import Article from 'components/layout/article.tsx'
import Title from 'components/layout/title.tsx'
import CustomPortableText from 'components/sanity-block-contents/portable-text/custom-portabletext.tsx'
import Share from 'islands/socialmedia-share.tsx'
import { client } from 'lib/sanity-client.ts'
import { getBlogPostQuery, getBlogPostReadingTimeQuery } from 'utils/queries.ts'
import { ArticleReadingTime, BlogArticle } from 'models/article.d.ts'
import { formatDate, formatReadingTime } from 'utils/helpers.ts'
import Link from '../../components/link.tsx'

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

  const date = formatDate(publishDate)
  const readingTime = formatReadingTime(estimatedReadingTime)

  return (
    <>
      <Head>
        <link rel='stylesheet' href='/styles/prism-theme.css' />
      </Head>
      <MetaData
        title={articleTitle}
        canonicalUrlPath={`/blog/${slug.current}`}
        description={excerpt}
        socialCardImage={socialImageUrl}
        contentType='article'
      />
      <Layout>
        <Section>
          <Article>
            <div class='flex(& col) w-full gap-3'>
              <img
                src={coverImageUrl}
                alt={altText}
                width='56'
                height='56'
                class='flex-shrink-0 w-14 h-14'
              />
              <Title titleTag='h2' titleClass='lg'>
                {articleTitle}
              </Title>
            </div>
            <div class='flex items-center gap-3'>
              <time
                dateTime={publishDate}
                class='text(xs 2xl:sm black dark:gray-400)'
              >
                {date}
              </time>
              <span class='text(xs 2xl:sm black dark:gray-400) underline'>
                {readingTime}
              </span>
            </div>
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
