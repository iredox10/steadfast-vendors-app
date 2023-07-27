import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
import FormInput from '../components/FormInput'
import axios from 'axios'

export const Plans = () => {
    const {vendorId,serviceId} = useParams()
    const {data:plans,loading,error} = UseFetch(`${path}/vendor/get-data-plans/${vendorId}/${serviceId}`)
    console.log(plans);

    const [data, setData] = useState('')
    const [amount, setAmount] = useState('')
    const [limit, setLimit] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const res = await axios.post(`${path}/vendor/add-data-plan/${vendorId}/${serviceId}`,{data,amount,limit})
            await axios(`${path}/vendor/get-data-plans/${vendorId}/${serviceId}`)
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
}

  return (
    <div className='p-4 md:w-[60%] mx-auto bg-red-500'>
        {plans && <div>
            <img src={plans.dataService.logo} alt="" className='w-[40%]'/>
           <p> {plans.dataService.name} </p>
            </div>}
        {plans && plans.dataService.dataPlans.map(plan =>(
            <div key={plan.id} className='flex gap-2'>
                <p>{plan.data}</p>
                <p>{plan.amount}</p>
                <p>{plan.limit}</p>
            </div>
            
        ))}

        <form onSubmit={handleSubmit}>
            <FormInput
            type={'text'}
            label={'data'}
            labelFor={'data'}
            onchange={e => setData(e.target.value)}
            />
            <FormInput
            type={'text'}
            label={'amount'}
            labelFor={'amount'}
            onchange={e => setAmount(e.target.value)}
            />
            <FormInput
            type={'text'}
            label={'limit'}
            labelFor={'limit'}
            onchange={e => setLimit(e.target.value)}
            />
            <button type='submit'>add</button>
        </form>
    </div>
  )
}
