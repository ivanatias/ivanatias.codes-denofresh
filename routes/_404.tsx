import { Head } from '$fresh/runtime.ts'
import { UnknownPageProps } from '$fresh/server.ts'
import Navbar from 'islands/navbar.tsx'

const NotFoundPage = ({ url: { pathname } }: UnknownPageProps) => (
  <>
    <Head>
      <title>Ivan Atias - 404 Not Found</title>
    </Head>
    <Navbar />
    <div class='grid h-screen gap-3 text(black dark:white) place-content-center'>
      <h1 class='text(4xl 2xl:5xl) font-bold'>
        The page: {pathname} was not found
      </h1>
      <a href='/' class='text(base center underline 2xl:lg) font-semibold'>
        Go back home
      </a>
    </div>
  </>
)

export default NotFoundPage
