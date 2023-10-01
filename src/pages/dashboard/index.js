import React from 'react'
import DashboardLayout from '@/components/layout'

const Dashboard = () => {
  return (
    <section className='h-[84vh]'>
      <h1 className='text-xl font-semibold'>Dashboard</h1>
    </section>
  )
}


Dashboard.getLayout = (page) =>(
  <DashboardLayout>{page}</DashboardLayout>
)

export default Dashboard