import { asset, Head } from '$fresh/runtime.ts'
import type { UnknownPageProps } from '$fresh/server.ts'
import Navbar from 'components/navbar.tsx'
import Link from 'components/link.tsx'

const NotFoundPage = (_props: UnknownPageProps) => (
  <>
    <Head>
      <title>404 Not Found</title>
      <link rel='preload' href={asset('/logo.svg')} as='image' />
      <link rel='stylesheet' href={asset('/styles.css')} />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={asset('/icons/apple-icon-180x180.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href={asset('/icons/android-icon-192x192.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={asset('/icons/favicon-32x32.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href={asset('/icons/favicon-96x96.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={asset('/icons/favicon-16x16.png')}
      />
      <script id='theme' src={asset('/scripts/theme.js')} />
    </Head>
    <Navbar />
    <div class='p-4 grid h-screen gap-3 text-slate-700 dark:text-slate-100 place-content-center'>
      <h1 class='text-center text-4xl 2xl:text-5xl font-bold'>
        The page was not found
      </h1>
      <Link
        href='/'
        className='text-base text-center underline 2xl:text-lg font-semibold'
      >
        Go back to home page
      </Link>
    </div>
  </>
)

export default NotFoundPage
