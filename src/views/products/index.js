import { Container } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <Container>
      <div>
        <input type="search"
          placeholder="Search Product" />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </Container>
  )
}

export default Products
