import Title from 'components/layout/title.tsx'
import Link from 'components/link.tsx'
import { slugify } from 'utils/helpers.ts'

interface Props {
  headings: string[]
}

const TableOfContent = ({ headings }: Props) => (
  <nav class='hidden fixed top-[15%] right-[4%] 2xl:right-[10%] xl:(flex(& col) gap-3) pt-3 w-[200px]'>
    <Title titleClass='small' titleTag='h5'>Table of Content</Title>
    <ul class='flex(& col) gap-2 text(gray-700 dark:gray-100) pl-2 font-bold border(l-2 indigo-600 dark:indigo-400)'>
      {headings.map((heading) => (
        <li key={heading}>
          <Link
            href={`#${slugify(heading)}`}
            className='font-semibold text(sm gray-600 dark:gray-400 hover:(underline gray-800 dark:white))'
          >
            {heading}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default TableOfContent
