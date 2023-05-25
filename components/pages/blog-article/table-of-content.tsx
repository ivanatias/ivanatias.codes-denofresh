import Title from 'components/layout/title.tsx'
import Link from 'components/link.tsx'
import { slugify } from 'utils/helpers.ts'

interface Props {
  headings: string[]
}

const TableOfContent = ({ headings }: Props) => (
  <nav class='hidden fixed top-[15%] right-[4%] 2xl:right-[10%] xl:flex xl:flex-col xl:gap-3 pt-3 w-[200px]'>
    <Title titleClass='small' titleTag='h5'>Table of Content</Title>
    <ul class='flex flex-col gap-2 pl-2 font-bold border-l-2 border-indigo-600 dark:border-indigo-400'>
      {headings.map((heading) => (
        <li key={heading}>
          <Link
            href={`#${slugify(heading)}`}
            className='font-semibold text-sm text-slate-600 dark:text-slate-400 hover:underline hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-150 ease-in'
          >
            {heading}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default TableOfContent
