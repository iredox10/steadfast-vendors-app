import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomerSidebar from '../components/CustomerSidebar'
import FormInput from '../components/FormInput'
import path from '../utils/path'
import UseFetch from '../hooks/UseFetch'
import axios from 'axios'
import Title from '../components/Title'

const CustomerEditProfile = () => {
    const {id} = useParams()
    const {data:customer,error,loading} = UseFetch(`${path}/customer/get-customer/${id}`)
    console.log(customer);
    const [fullName, setFullName] = useState('')
    const [bankName, setBankName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [accountName, setAccountName] = useState('')

    useEffect(()=>{
        setTimeout(() =>{
        setAccountName(customer.bankAccountName)        
    setBankName(customer.bankName)
    setAccountNumber(customer.bankAccountNumber)
    setFullName(customer.fullName)
        },1000)
    },[customer])

    const handleSubmit =async (e) => {
        e.preventDefault()
        try {
            const res = await axios.patch(`${path}/customer/edit-customer/${id}`,{
                bankName,
                bankAccountName:accountName,
                bankAccountNumber:accountNumber,
            })
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }


  return (
    <div className='flex gap-3'>
<CustomerSidebar id={id} />
<div className='m-2 w-full'>
    <Title title={'edit or add bank detail'} />
    <div>
        <form onSubmit={handleSubmit}>
            <FormInput
            type={'text'}
            label={'bank name'}
            placeholder={'bank name'}
            onchange={(e) => setBankName(e.target.value)}
            value={bankName}
            />
            
            <FormInput
            type={'text'}
            label={'account name'}
            placeholder={'account name'}
            onchange={(e) => setAccountName(e.target.value)}
            value={accountName}
            />

            <FormInput
            type={'text'}
            label={'account number'}
            placeholder={'account number'}
            onchange={(e) => setAccountNumber(e.target.value)}
            value={accountNumber}
            />
            <button type='submit'>edit</button>
        </form>
    </div>
</div>
    </div>
  )
}

export default CustomerEditProfile