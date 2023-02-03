import { Head } from '$fresh/runtime.ts'
import { AppProps } from '$fresh/server.ts'

const App = ({ Component }: AppProps) => (
	<>
		<Head>
			<script id='theme' src='/scripts/theme.js'></script>
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
			<meta
				name='theme-color'
				media='(prefers-color-scheme: light)'
				content='#ffffff'
			/>
			<meta
				name='theme-color'
				media='(prefers-color-scheme: dark)'
				content='#020105'
			/>
		</Head>
		<body class='bg(white dark:[#020105])'>
			<Component />
		</body>
	</>
)

export default App
