import { Head } from '$fresh/runtime.ts'
import { ErrorPageProps } from '$fresh/server.ts'
import Navbar from 'islands/navbar.tsx'
import Link from 'components/link.tsx'

const Error500Page = ({ error }: ErrorPageProps) => (
  <>
    <Head>
      <title>500 Internal server error</title>
    </Head>
    <Navbar />
    <div class='p-4 grid h-screen gap-3 text(black dark:white) place-content-center'>
      <h1 class='text(center 4xl 2xl:5xl) font-bold'>
        500 internal server error
      </h1>
      <Link
        href='/'
        className='text(base center underline 2xl:lg) font-semibold'
      >
        Try again
      </Link>
    </div>
  </>
)

export default Error500Page
