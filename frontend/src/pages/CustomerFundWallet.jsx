import React from 'react'
import CustomerSidebar from '../components/CustomerSidebar'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'

const CustomerFundWallet = () => {
  const {id} = useParams()
  return (
    <div className='flex gap-5'>
        <CustomerSidebar id={id} />
        <div className='border-3'>
            <Title title={'fund wallet'} />
            <form>
              <div>
            <label
              for="payment"
              className="mb-2 text-xl block text-sm font-medium"
            >
            Select Network
            </label>
            <select
              id="payment"
              className="block w-full rounded-lg border border-blue-300 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option className='uppercase' selected disabled>Choose Payment Option</option>
              <option className='uppercase' value="paystack">Paystack ATM</option>
              <option className='uppercase' value="automatedBank">automated bank</option>
              <option className='uppercase' value="bankTransfer">bank transfer</option>
            </select>
          </div>
          <button>proceed</button>
            </form>
        </div>
    </div>
  )
}

export default CustomerFundWallet