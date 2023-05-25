import type { AppProps } from '$fresh/server.ts'

const App = ({ Component }: AppProps) => (
  <body class='bg-slate-50 dark:bg-[#0D1117]'>
    <Component />
  </body>
)

export default App
