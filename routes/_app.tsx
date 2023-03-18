import { Head } from '$fresh/runtime.ts'
import type { AppProps } from '$fresh/server.ts'

const App = ({ Component }: AppProps) => (
  <>
    <Head>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/icons/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/icons/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/icons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/icons/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/icons/favicon-16x16.png'
      />
      <link rel='preload' href='/logo.svg' as='image' />
      <link rel='preload' href='/profile-pic.webp' as='image' />
      <link
        rel='preload'
        href='/images/sprite.svg'
        as='image'
        crossOrigin='anonymous'
      />
      <link rel='preload' href='/scripts/theme.js' as='script' />
      <meta
        name='theme-color'
        media='(prefers-color-scheme: light)'
        content='#ffffff'
      />
      <meta
        name='theme-color'
        media='(prefers-color-scheme: dark)'
        content='#0D1117'
      />
      <script id='theme' src='/scripts/theme.js' />
    </Head>
    <body class='bg(gray-100 dark:[#0D1117])'>
      <Component />
    </body>
  </>
)

export default App
