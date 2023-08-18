import React, { useState } from 'react'
import CustomerSidebar from '../components/CustomerSidebar'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'
import FormInput from '../components/FormInput'
import FormBtn from '../components/FormBtn'
import CustomerHeader from '../components/CustomerHeader'
import { Error } from '../components/Error'

const CustomerFundWallet = () => {
  const {id} = useParams()
  const [amount, setAmount] = useState('')
  const [err, setErr] = useState('')
  const [payment, setPayment] = useState('')

  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(!amount || !payment){
      setErr('please fill all the fields')
      return
    }
    if(parseInt(amount) < 100 || !amount){
      setErr('amount must be 100 or above')
      return
    }
    setErr('')
  }

  return (
    <div>
    <CustomerHeader  />
        <div>
    <div className='flex gap-2 w-full'>
        <CustomerSidebar id={id} />
        <div className='border-3 w-full my-5 mx-2'>
            <Title title={'fund wallet'} />
            <form onSubmit={handleSubmit} className='bg-white drop-shadow-xl w-full p-2'>
              {err && <Error err={err} />}
              <div>
            <label
              htmlFor="payment"
              className="mb-2 md:text-xl block text-sm font-medium"
            >
            Select Payment Method
            </label>
            <select
              id="payment"
              className="block w-full rounded-lg border border-blue-300 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              onChange={e => setPayment(e.target.value)}
            >
              <option className='uppercase' selected disabled>Choose Payment Option</option>
              <option className='uppercase' value="paystack">Paystack ATM</option>
              <option className='uppercase' value="automatedBank">automated bank</option>
              <option className='uppercase' value="bankTransfer">bank transfer</option>
            </select>
          </div>
          <div>
            <FormInput
              type={'text'}
              label={'amount'}
              labelFor={'amount'}
              onchange={e => setAmount(e.target.value)}
            />
          </div>
          <FormBtn text='proceed' />
            </form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default CustomerFundWallet