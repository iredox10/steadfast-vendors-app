import React from 'react'
import {FaArrowsAlt, FaBold, FaCalendar, FaCashRegister, FaDoorOpen, FaLockOpen, FaMoneyBill, FaPhone, FaTransgender, FaUser, FaWallet, FaWifi} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const CustomerSidebar = () => {
  return (
    <div className=' shadow-md p-2'>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaCalendar className='text-gray-600' />
            <Link ><span className='capitalize font-medium hover:text-gray-300'>dashboard</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaWallet className='text-gray-600' />
            <Link ><span className='capitalize font-medium hover:text-gray-300'>account</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaWifi className='text-gray-600' />
            <Link ><span className='capitalize font-medium hover:text-gray-300'>fund wallet</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaPhone className='text-gray-600' />
            <Link ><span className='capitalize font-medium hover:text-gray-300'>buy airtime</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaBold className='text-gray-600' />
            <Link ><span className='capitalize font-medium hover:text-gray-300'>bills</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaCashRegister className='text-gray-600' />
            <Link ><span className='capitalize font-medium hover:text-gray-300'>transactions</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaMoneyBill className='text-gray-600' />
            <Link ><span className='capitalize font-medium hover:text-gray-300'>pricing</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaLockOpen className='text-gray-600' />
            <Link ><span className='capitalize font-medium hover:text-gray-300'>logout</span> </Link>
        </div>
    </div>
  )
}

export default CustomerSidebar