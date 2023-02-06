import { Head } from '$fresh/runtime.ts'
import { UnknownPageProps } from '$fresh/server.ts'
import Navbar from 'islands/navbar.tsx'
import Link from 'components/link.tsx'

const NotFoundPage = ({ url: { pathname } }: UnknownPageProps) => (
  <>
    <Head>
      <title>Ivan Atias - 404 Not Found</title>
    </Head>
    <Navbar />
    <div class='p-4 grid h-screen gap-3 text(black dark:white) place-content-center'>
      <h1 class='text(center 4xl 2xl:5xl) font-bold'>
        The page: {pathname} was not found
      </h1>
      <Link
        href='/'
        className='text(base center underline 2xl:lg) font-semibold'
      >
        Go back to home page
      </Link>
    </div>
  </>
)

export default NotFoundPage
