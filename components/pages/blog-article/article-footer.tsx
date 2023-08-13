import Share from 'islands/socialmedia-share.tsx'
import PageSwitch, {
  type Props as PageSwitchProps,
} from 'components/page-switch.tsx'

interface Props extends Omit<PageSwitchProps, 'type'> {
  articleSlug: string
}

const ArticleFooter = (
  { prevPageTitle, nextPageTitle, articleSlug }: Props,
) => (
  <footer class='mt-10'>
    <PageSwitch
      prevPageTitle={prevPageTitle}
      nextPageTitle={nextPageTitle}
      type='blog'
    />
    <Share slug={articleSlug} />
  </footer>
)
export default ArticleFooter
