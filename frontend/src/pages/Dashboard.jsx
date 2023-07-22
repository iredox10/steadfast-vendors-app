import {useParams} from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
const Dashboard = () =>{
    const {id} = useParams()
    const {data:vendor, error, isPending} = UseFetch(`${path}/vendor/get-vendor/${id}`)
    console.log(vendor)
    return (
        
       <div className=' '>
        {vendor &&
        <div className='flex items-start'>
            <Sidebar id={id}/>
            {/* <h1 className='bg-gray-500'>{vendor.firstName} welcome to your dashboard </h1> */}
        </div> 
        }
        </div>
    
    )
}

export default Dashboard