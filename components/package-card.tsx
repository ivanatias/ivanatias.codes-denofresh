import Article from 'components/layout/article.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import SVG from 'components/svg.tsx'
import Link from 'components/link.tsx'
import type { Package } from 'models/packages.ts'

type Props = Omit<Package, '_id'>

const PackageCard = ({ packageName, description, githubUrl }: Props) => (
  <Link isExternal href={githubUrl} className=''>
    <Article className='flex flex-col gap-5 p-4 min-w-[240px] border border-transparent hover:border-indigo-600 dark:hover:border-indigo-400 rounded-lg hover:scale-105 transition duration-300 ease-in-out'>
      <div className='flex flex-col gap-2'>
        <SVG
          id='icon-github'
          hidden
          className='w-10 h-10 text-slate-800 dark:text-slate-100'
        />
        <Title titleTag='h3' titleClass='normal'>
          {packageName}
        </Title>
      </div>
      <Paragraph pClass='small'>{description}</Paragraph>
    </Article>
  </Link>
)

export default PackageCard
