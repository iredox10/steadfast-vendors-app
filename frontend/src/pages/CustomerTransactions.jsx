import React from 'react'
import { useParams } from 'react-router-dom'
import CustomerSidebar from '../components/CustomerSidebar'
import CustomerHeader from '../components/CustomerHeader'

const CustomerTransactions = () => {
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

export default CustomerTransactions