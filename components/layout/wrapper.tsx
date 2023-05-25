import type { ComponentChildren } from 'preact'
import Navbar from 'components/navbar.tsx'
import Header from 'components/layout/header.tsx'
import Footer from 'components/layout/footer.tsx'

interface Props {
  children: ComponentChildren
  showHeader?: boolean
}

const Layout = ({ children, showHeader = true }: Props) => (
  <>
    <Navbar />
    <main class='flex flex-col flex-1 max-w-3xl px-5 mx-auto pt-32'>
      {showHeader && <Header />}
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
