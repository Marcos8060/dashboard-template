import React from 'react'
import DashboardLayout from '@/components/layout'

const Users = () => {
  return (
    <div>Users</div>
  )
}

Users.getLayout = (page) =>(
    <DashboardLayout>{page}</DashboardLayout>
)

export default Users