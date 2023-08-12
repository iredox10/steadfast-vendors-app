import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
import CustomerSidebar from '../components/CustomerSidebar'



const CustomerDashboard = () => {
  const {id} = useParams()
    const {data:customer,loading,error} = UseFetch(`${path}/customer/get-customer/${id}`)
    console.log(customer);
  return (
    <div>
      <header className='bg-blue-300 md:p-10'>
        <h1>customer dashboard</h1>
      </header>
    {customer &&
     <div className='flex gap-3 '>
      <CustomerSidebar id={id} />
      <div className='flex flex-col w-full '>
        <div>
      <h1 className='bg-yellow-300 p-2'>{customer.username} welcome</h1>
      <div>
        <div className= 'bg-yellow-400 capitalize p-2'>
          <p>good day, {customer.username}</p>
          <h2 className='text-2xl font-bold my-2' >wallet balance </h2>
          <p className='text-xl md:text-2xl font-bold'>{customer.walletBalance === 0 ? <p>₦ 0</p> : customer.walletBalance}</p>
        </div>
      </div>
      </div>
      <div className="">
        <h1>services</h1>
        <div>
          <img src="" alt="" />
          <p>buy airtime</p>
        </div>
      </div>
      </div>
    </div>
    }
        </div>
  )
}

export default CustomerDashboard