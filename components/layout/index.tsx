import type { ComponentChildren } from 'preact'
import Navbar from 'islands/navbar.tsx'
import Header from 'components/layout/header.tsx'
import Footer from 'components/layout/footer.tsx'

interface Props {
  children: ComponentChildren
}

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    <main class='flex(& 1 col) max-w-3xl px-5 mx-auto'>
      <Header />
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
