import Dashboard from './Dashboard'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
import { Link, useParams } from 'react-router-dom'

const Pricing = () => {
  const {id} = useParams()
  const {data:dataServices,error,loading} = UseFetch(`${path}/vendor/get-data-plans-by-vendor/${id}`)
  console.log(dataServices);
    return (
    <div className='flex'>
        <Dashboard />
        <div className='grid grid-cols-4 gap-3 '>
          {dataServices && dataServices.map(service => (
            <div key={service.id} className='shadow-lg '>
              <div className='flex flex-col items-center bg-yellow-200'>
              <img src={service.logo} alt="service logo" className='w-[30%]' />
              <p >{service.name}</p>
              </div>
              <div>
                {service.dataPlans.map(plan => (
                  <div key={plan.id} className='flex gap-2'>
                    <p>{plan.data}</p>
                    <p>{plan.amount}</p>
                    <p>{plan.limit}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
  )
}

export default Pricing