/* eslint-disable react/jsx-max-props-per-line */
import { lazy } from 'react'
import { createBrowserHistory } from 'history'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'src/views/home'
import Layout from 'src/layout'
import Auth from 'src/layout/auth'
import Roles from 'src/layout/roles'
import { roles } from 'src/utils/constants'

const About = lazy(() => import('src/views/about'))
const Login = lazy(() => import('src/views/login'))
const PageNotFound = lazy(() => import('src/layout/pageNotFound'))
const Products = lazy(() => import('src/views/products'))
const Featured = lazy(() => import('src/views/products/featured'))
const New = lazy(() => import('src/views/products/new'))
const Users = lazy(() => import('src/views/users'))
const Admin = lazy(() => import('src/views/admin'))
const Settings = lazy(() => import('src/views/settings'))
const SignIn = lazy(() => import('src/views/signin'))

const history = createBrowserHistory()

const Router = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        {/* Protected Routes */}
        <Route element={<Auth />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />

            {/* Access Required Routes */}
            <Route element={<Roles allowedRoles={[roles.ADMIN]} />}>
              <Route path="products" element={<Products />}>
                <Route index element={<Featured />} />
                <Route path="featured"element={<Featured />} />
                <Route path="new"element={<New />} />
              </Route>
            </Route>
            <Route element={<Roles allowedRoles={[roles.EDITOR, roles.ADMIN]} />}>
              <Route path="users/:userId"element={<Users />} />
              <Route path="users/admin"element={<Admin />} />
              <Route path="settings"element={<Settings />} />
            </Route>
          </Route>
        </Route>

        {/* Public Routes */}
        <Route path="login"element={<Login />} />
        <Route path="signIn"element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
