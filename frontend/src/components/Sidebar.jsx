import { FaBlog, FaCalendar, FaEnvelope, FaFeather, FaMailchimp, FaMoneyBill, FaPeopleArrows, FaPeopleCarry, FaServicestack, FaUsers } from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Sidebar = ({id}) => {
    return (
        
        <div className="shadow-lg min-h-[80vh] min-w-[15vw] text-center ">
            <h1 className='underline capitalize font-bold p-2'>company Logo</h1>
            <hr  className=''/>
            <ul className='flex flex-col'>
            <div className='flex items-center gap-3 border-b-2 p-2 md:p-7'>
            <FaCalendar className='text-gray-600' />
            <Link to={`/customize/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>dashboard</span> </Link>
        </div>
            <div className='flex items-center gap-3 border-b-2 p-2 md:p-7'>
            <FaUsers className='text-gray-600' />
            <Link to={`/customers/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>customers</span> </Link>
        </div>
            <div className='flex items-center gap-3 border-b-2 p-2 md:p-7'>
            <FaEnvelope className='text-gray-600' />
            <Link to={`/feedback/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>feedback</span> </Link>
        </div>
            <div className='flex items-center gap-3 border-b-2 p-2 md:p-7'>
            <FaMoneyBill className='text-gray-600' />
            <Link to={`/pricing/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>pricing</span> </Link>
        </div>
            <div className='flex items-center gap-3 border-b-2 p-2 md:p-7'>
            <FaBlog className='text-gray-600' />
            <Link to={`/services/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>services</span> </Link>
        </div>
            <div className='flex items-center gap-3 border-b-2 p-2 md:p-7'>
            <FaServicestack className='text-gray-600' />
            <Link to={`/products/${id}`} ><span className='capitalize font-medium hover:text-gray-300'>products</span> </Link>
        </div>
         </ul>   
        </div>
    )

}

export default Sidebar