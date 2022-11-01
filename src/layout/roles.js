/* eslint-disable react/jsx-max-props-per-line */
import { Navigate, Outlet } from 'react-router-dom'

const Roles = ({ allowedRoles }) => {
  const auth = JSON.parse(localStorage.getItem('auth'))

  return (
    auth.user.roles?.find((role) => allowedRoles?.includes(role))
      ? <Outlet />
      : <Navigate to="login" replace />
  )
}

export default Roles
