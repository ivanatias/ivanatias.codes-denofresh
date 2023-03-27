import type { AppProps } from '$fresh/server.ts'

const App = ({ Component }: AppProps) => (
  <body class='bg(gray-100 dark:[#0D1117])'>
    <Component />
  </body>
)

export default App
