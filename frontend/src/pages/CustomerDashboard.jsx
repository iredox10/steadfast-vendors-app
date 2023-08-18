import { Link, useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
import CustomerSidebar from '../components/CustomerSidebar'
import CustomerHeader from '../components/CustomerHeader'



const CustomerDashboard = () => {
  const {id} = useParams()
    const {data:customer,loading,error} = UseFetch(`${path}/customer/get-customer/${id}`)
    console.log(customer);
  return (
    <div>
      {customer && <CustomerHeader customer={customer.username} />}
    {customer &&
     <div className='flex gap-2 '>
      <CustomerSidebar id={id} />
      <div className='flex flex-col w-full mx-2 '>
        <div className='bg-white shadow-xl w-[95%] md:w-[90%] mx-auto my-5'>
      <h1 className='capitalize bg-white p-2'>{customer.username} welcome</h1>
      <div>
        <div className= 'bg-yellow-400 capitalize p-2'>
          <p className='capitalize'>good day, {customer.username}</p>
          <h2 className='text-2xl font-bold my-2' >wallet balance </h2>
          <p className='text-xl md:text-2xl font-bold'>{customer.walletBalance === 0 ? <p>₦ 0</p> : customer.walletBalance}</p>
        </div>
      </div>
      <div className="py-7 px-2">
        <h1>services</h1>
        <div>
          <img src="" alt="" />
          <Link to={`/customer-buy-airtime/${id}`} className=''>buy airtime</Link>
        </div>
      </div>
      </div>
      </div>
    </div>
    }
        </div>
  )
}

export default CustomerDashboard