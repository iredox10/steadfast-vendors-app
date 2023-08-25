import React from 'react'
import { useParams } from 'react-router-dom'
import CustomerHeader from '../components/CustomerHeader'
import CustomerSidebar from '../components/CustomerSidebar'

const CustomerPricing = () => {
  const {id} = useParams()
  return (
    <div>
      <CustomerHeader />
    <div className='flex gap-3'>
        <CustomerSidebar id={id} />
        <div>
            customer transactions
        </div>
    </div>
    </div>
  )
}

export default CustomerPricing