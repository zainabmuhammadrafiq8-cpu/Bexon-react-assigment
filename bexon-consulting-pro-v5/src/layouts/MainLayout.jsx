import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ScrollProgress from '../components/common/ScrollProgress'

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
