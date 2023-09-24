import React from 'react'
import Layout from '@/components/layout'

const Dashboard = () => {
  return (
    <section className='h-[84vh]'>
      <h1 className='text-xl font-semibold'>Dashboard</h1>
    </section>
  )
}


Dashboard.getLayout = (page) =>(
  <Layout>{page}</Layout>
)

export default Dashboard