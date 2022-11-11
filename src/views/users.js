
/* eslint-disable no-unused-vars */
import { Container } from '@mui/material'
import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Users = () => {
  const { userId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const activeUsers = searchParams.get('filter')
  const country = searchParams.get('country')

  // useEffect(() => {
  //   console.log('userId:', userId)
  //   console.log('activeUsers:', activeUsers)
  //   console.log('country:', country)
  // })

  return (
    <Container>
      <p>{userId}</p>
      <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
      <button onClick={() => setSearchParams({ filter: 'active', country: 'Istanbul' })}>Add Country</button>
      <button onClick={() => setSearchParams({ })}>Reset Filter</button>
    </Container>
  )
}

export default Users
