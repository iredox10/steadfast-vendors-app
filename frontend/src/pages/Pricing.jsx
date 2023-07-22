import React from 'react'
import Dashboard from './Dashboard'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
import { useParams } from 'react-router-dom'

const Pricing = () => {
  const {id} = useParams()
  const {data:services,error,loading} = UseFetch(`${path}/vendor/get-data-services/${id}`)
console.log(services);
  return (
    <div className='flex'>
        <Dashboard />
        <div>
    {services &&  
      services.map(service => (
        <div key={service.id}>
          <p>{service.logo}</p>
          <p>{service.name}</p>
        </div>
      ))
    }
        </div>
        
        </div>
  )
}

export default Pricing