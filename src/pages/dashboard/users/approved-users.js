import React from 'react'
import DashboardLayout from '@/components/layout'

const ApprovedUsers = () => {
  return (
    <div>ApprovedUsers</div>
  )
}

ApprovedUsers.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
)

export default ApprovedUsers