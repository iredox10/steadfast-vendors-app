import React from 'react'
import { Link } from 'react-router-dom'

const VendorHeader = () => {
  return (
    <div className='flex items-center justify-between md:p-6 bg-blue-500'>
        <h1>logo</h1>
        <nav className='flex gap-4 capitalize font-bold text-white'>
            <Link to='/'>Home</Link>
            <Link to='/'>logout</Link>
        </nav>
    </div>
  )
}

export default VendorHeader