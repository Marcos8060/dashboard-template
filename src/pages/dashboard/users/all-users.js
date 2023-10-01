import React from 'react'
import DashboardLayout from '@/components/layout'

const AllUsers = () => {
  return (
    <div>AllUsers</div>
  )
}


AllUsers.getLayout = (page) =>(
    <DashboardLayout>{page}</DashboardLayout>
)
export default AllUsers