import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

const Header = () => {
  return (
    <section className='bg-primary shadow-2xl text-white py-4 px-8 h-[10vh] flex items-center justify-between'>
      <h1 className='text-xl'>Payouts</h1>
      <div className='flex items-center gap-1'>
        <img className='h-8 w-8 rounded-full object-cover' src="/images/doc.jpg" alt="" />
        <FiChevronDown className='text-xl cursor-pointer' />
      </div>
    </section>
  )
}

export default Header