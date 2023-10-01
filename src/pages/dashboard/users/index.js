import React from 'react'
import Layout from '@/components/layout'

const Users = () => {
  return (
    <div>Users</div>
  )
}

Users.getLayout = (page) =>(
    <Layout>{page}</Layout>
)

export default Users