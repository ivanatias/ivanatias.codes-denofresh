import Link from 'components/link.tsx'

interface Props {
  title: string
}

const WorkHeader = ({ title }: Props) => (
  <div class='flex items-center gap-2'>
    <Link href='/works'>
      <h2 class='text(base md:lg black dark:white) font-bold'>
        Works
      </h2>
    </Link>
    <span
      class='text(base black dark:white) font-semibold'
      aria-hidden={true}
    >
      |
    </span>
    <h3 class='text(base md:lg pink-800 dark:pink-600) font-bold'>
      {title}
    </h3>
  </div>
)

export default WorkHeader
