import React from 'react'
import { useParams } from 'react-router-dom'
import CustomerSidebar from '../components/CustomerSidebar'

export const CustomerTransactions = () => {
    const {id} = useParams()
  return (

    <div className='flex gap-3'>
        <CustomerSidebar id={id} />
        <div>
            customer transactions
        </div>
    </div>
  )
}
