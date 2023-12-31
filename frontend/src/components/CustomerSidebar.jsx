import React, { useState } from 'react'
import { FaBold, FaCalendar, FaCashRegister, FaHome, FaLockOpen, FaMoneyBill, FaPhone, FaTransgender, FaUser, FaWallet, FaWifi} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { UseAuthContext } from '../hooks/useAuthContext'
import { UseSideBarContext } from '../hooks/useSideBarContext'
const CustomerSidebar = ({id}) => {
        const {state,dispatch} = UseAuthContext()
        const navigate = useNavigate()

        const logout = () => {
            localStorage.removeItem('user')
            dispatch({type:"LOGOUT"})
            navigate(`/vendor/${id}`)
        }
        const {state:showSibebar} = UseSideBarContext()
  return (
    <div>
        {showSibebar.payload ? 
      <div className=' shadow-md hidden p-2 md:block min-h-screen'>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaHome className='text-gray-600' />
            <Link to={`/customer-dashboard/${id}`}  ><span className='capitalize font-medium hover:text-gray-300'>dashboard</span> </Link>
        </div>

        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaWallet className='text-gray-600' />
            <Link to={`/customer-account/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>account</span> </Link>
        </div>
        
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaWifi className='text-gray-600' />
            <Link to={`/customer-fund-wallet/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>fund wallet</span> </Link>
        </div>

        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaPhone className='text-gray-600' />
            <Link to={`/customer-buy-airtime/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>buy airtime</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaBold className='text-gray-600' />
            <Link to={`/customer-bills/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>bills</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaCashRegister className='text-gray-600' />
            <Link to={`/customer-transactions/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>transactions</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaMoneyBill className='text-gray-600' />
            <Link to={`/customer-pricing/${id}`}  ><span className='capitalize font-medium hover:text-gray-300'>pricing</span> </Link>
        </div>
        <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
            <FaLockOpen className='text-gray-600' />
            <button onClick={logout} ><span className='capitalize font-medium hover:text-gray-300'>logout</span> </button>
        </div>
    </div>
    : 
    <div className=' shadow-md  p-2 md:block'>
      <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
          <FaCalendar className='text-gray-600' />
          <Link to={`/customer-dashboard/${id}`}  ><span className='capitalize font-medium hover:text-gray-300'>dashboard</span> </Link>
      </div>

      <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
          <FaWallet className='text-gray-600' />
          <Link to={`/customer-account/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>account</span> </Link>
      </div>
      
      <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
          <FaWifi className='text-gray-600' />
          <Link to={`/customer-fund-wallet/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>fund wallet</span> </Link>
      </div>

      <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
          <FaPhone className='text-gray-600' />
          <Link to={`/customer-buy-airtime/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>buy airtime</span> </Link>
      </div>
      <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
          <FaBold className='text-gray-600' />
          <Link to={`/customer-bills/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>bills</span> </Link>
      </div>
      <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
          <FaCashRegister className='text-gray-600' />
          <Link to={`/customer-transactions/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>transactions</span> </Link>
      </div>
      <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
          <FaMoneyBill className='text-gray-600' />
          <Link to={`/customer-pricing/${id}`}  ><span className='capitalize font-medium hover:text-gray-300'>pricing</span> </Link>
      </div>
      <div className='flex items-center gap-3 border-b-2 p-2 md:p-3'>
          <FaLockOpen className='text-gray-600' />
          <button onClick={logout} ><span className='capitalize font-medium hover:text-gray-300'>logout</span> </button>
      </div>
  </div>}
    


    </div>
  )
}

export default CustomerSidebar