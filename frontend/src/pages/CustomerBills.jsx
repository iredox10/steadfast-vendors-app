import React from 'react'
import { useParams } from 'react-router-dom'
import CustomerSidebar from '../components/CustomerSidebar'

const CustomerBills = () => {
  const {id} = useParams()
  return (
    
    <div className='flex gap-3'>
      <CustomerSidebar id={id} />
      <div>
        customer bills
      </div>
    </div>
  )
}

export default CustomerBills