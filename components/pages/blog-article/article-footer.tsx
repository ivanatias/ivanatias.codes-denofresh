import Link from 'components/link.tsx'
import Share from 'islands/socialmedia-share.tsx'
import type { BlogArticle } from 'models/article.d.ts'

interface Props extends Omit<BlogArticle, 'currentPost'> {
  postSlug: string
}

const ArticleFooter = ({ previousPost, nextPost, postSlug }: Props) => (
  <footer class='mt-10'>
    <div class='flex items-center justify-center gap-4'>
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
    <Share slug={postSlug} />
  </footer>
)
export default ArticleFooter
