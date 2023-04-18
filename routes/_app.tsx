import type { AppProps } from '$fresh/server.ts'

const App = ({ Component }: AppProps) => (
  <body class='bg(gray-50 dark:[#0D1117])'>
    <Component />
  </body>
)

export default App
