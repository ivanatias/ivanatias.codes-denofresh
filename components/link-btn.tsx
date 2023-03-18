import Link, { type Props } from 'components/link.tsx'

const defaultStyle =
  'w-full max-w([150px] 2xl:[200px]) py-2 px-5 bg(indigo-700 dark:indigo-600) text(center gray-100 sm md:base) font-semibold rounded-md hover:bg-indigo-800 dark:hover:bg-indigo-700 transition duration-150'

const LinkButton = ({ children, className, ...restOfProps }: Props) => (
  <div class='flex items-center justify-center mt-4'>
    <Link
      className={className ?? defaultStyle}
      {...restOfProps}
    >
      {children}
    </Link>
  </div>
)

export default LinkButton
