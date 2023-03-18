import { asset, Head } from '$fresh/runtime.ts'
import type { AppProps } from '$fresh/server.ts'

const App = ({ Component }: AppProps) => (
  <>
    <Head>
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
      <link rel='preload' href={asset('/logo.svg')} as='image' />
      <link rel='preload' href={asset('/profile-pic.webp')} as='image' />
      <link
        rel='preload'
        href={asset('/images/sprite.svg')}
        as='image'
        crossOrigin='anonymous'
      />
      <link rel='preload' href={asset('/scripts/theme.js')} as='script' />
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
