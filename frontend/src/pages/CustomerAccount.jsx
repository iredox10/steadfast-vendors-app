import React from 'react'
import CustomerSidebar from '../components/CustomerSidebar'
import { Link, useParams } from 'react-router-dom'
import path from '../utils/path'
import UseFetch from '../hooks/UseFetch'
import Button from '../components/Button'
import Title from '../components/Title'

const CustomerAccount = () => {
  const {id} = useParams()
  const {data:customer,error,loading} = UseFetch(`${path}/customer/get-customer/${id}`)
  console.log(customer);
  return (
    <div className='flex gap-3 '>
      <CustomerSidebar id={id}  />
      {customer &&
      <div className='m-2 p-2 w-full shadow-lg'>
        <Title title={'profile'} />
        <div className='flex gap-10'>
          <div>
          <p className='capitalize my-2'><span className='font-bold'>full name:</span> {customer.fullName}</p>
          <p className='capitalize my-2'><span className='font-bold'>username:</span> {customer.username}</p>
          <p className='capitalize my-2'><span className='font-bold'>email:</span> {customer.email}</p>
          <p className='capitalize my-2'><span className='font-bold'>state:</span> {customer.state}</p>
          <p className='capitalize my-2'><span className='font-bold'>phone number:</span> {customer.phoneNumber}</p>
          </div>
          <div>
          <p className='capitalize my-2'><span className='font-bold'>bank name:</span> {customer.bankName === null ? 'empty' :customer.bankName}</p>
          <p className='capitalize my-2'><span className='font-bold'>account name:</span> {customer.bankAccountName === null ? 'empty' :customer.bankAccountName}</p>
          <p className='capitalize my-2'><span className='font-bold'>account number:</span> {customer.bankAccountNumber=== null ? 'empty' :customer.bankAccountNumber}</p>
          </div>
        </div>
        <Link className='bg-blue-400 p-2 text-white mt-4 block w-28 capitalize hover:bg-blue-300' to={`/customer-edit-profile/${id}`}>edit profile</Link>
      </div>
      }
    </div>
  )
}

export default CustomerAccount