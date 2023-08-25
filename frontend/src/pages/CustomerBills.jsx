import React from 'react'
import { useParams } from 'react-router-dom'
import CustomerSidebar from '../components/CustomerSidebar'
import CustomerHeader from '../components/CustomerHeader'

const CustomerBills = () => {
  const {id} = useParams()
  return (
    <div>
      <CustomerHeader />

    <div className='flex gap-3'>
      <CustomerSidebar id={id} />
      <div>
        customer bills
      </div>
    </div>
    </div>    
  )
}

export default CustomerBills