import { asset, Head } from '$fresh/runtime.ts'
import type { ErrorPageProps } from '$fresh/server.ts'
import Navbar from 'components/navbar.tsx'
import Link from 'components/link.tsx'

const Error500Page = ({ error }: ErrorPageProps) => (
  <>
    <Head>
      <title>500 Internal server error</title>
      <script id='theme' src={asset('/scripts/theme.js')} />
    </Head>
    <Navbar />
    <div class='p-4 grid h-screen gap-3 text-slate-700 dark:text-slate-100 place-content-center'>
      <h1 class='text-center text-4xl 2xl:text-5xl font-bold'>
        500 internal server error
      </h1>
      <Link
        href='/'
        className='text-base text-center underline 2xl:text-lg font-semibold'
      >
        Try again
      </Link>
    </div>
  </>
)

export default Error500Page
