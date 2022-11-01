import { Outlet } from 'react-router-dom'
import NavBar from 'src/layout/navBar'

const Layout = () => {
  return (
    <main className="app">
      <NavBar />
      <Outlet />
    </main>
  )
}

export default Layout
