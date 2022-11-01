/* eslint-disable react/jsx-max-props-per-line */
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return (
    auth?.user
      ? <Outlet />
      : <Navigate to="login" replace />
  )
}

export default Auth
