import Link from 'components/link.tsx'
import { slugify } from 'utils/helpers.ts'

interface Props {
  prevPageTitle: string | undefined
  nextPageTitle: string | undefined
  type: 'blog' | 'project' | 'contribution'
}

const PageSwitch = ({ prevPageTitle, nextPageTitle, type }: Props) => {
  const paths: Record<typeof type, string> = {
    blog: '/blog',
    project: '/works',
    contribution: '/contributions',
  }

  const pageType = type === 'blog' ? 'article' : type

  return (
    <div class='flex items-center justify-center gap-4'>
      {prevPageTitle !== undefined && (
        <Link href={`${paths[type]}/${slugify(prevPageTitle)}`}>
          ← Previous {pageType}
        </Link>
      )}
      {nextPageTitle !== undefined && (
        <Link href={`${paths[type]}/${slugify(nextPageTitle)}`}>
          Next {pageType} →
        </Link>
      )}
    </div>
  )
}

export default PageSwitch

export type { Props }
