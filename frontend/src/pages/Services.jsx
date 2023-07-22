import { useState } from 'react'
import Dashboard from './Dashboard'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
import { FaPlus, FaTimes } from 'react-icons/fa'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Services = () =>{
    const {data:services,error,loading} = UseFetch(`${path}/get-services`)
    const {id} = useParams()
    // console.log(services);
    const [showModel, setShowModel] = useState(false)
    
    const handleSubmit = async(e) =>{
        e.preventDefault()
        setShowModel(!showModel)
    }

    const addService = async (e) =>{
        const div = e.target.parentElement
        const serviceName = div.firstElementChild.innerText.slice(5).toLowerCase().trim()
        const service = services.find(s=> s.service === serviceName)
        try {
            const res = axios.post(`${path}/vendor/add-service/${id}`,{service:service.service,desc:service.desc})
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='flex relative '>
        <Dashboard />
        <div className='px-10 py-2 w-full'>
            <h1 className='capitalize text-center text-2xl font-bold '>services you offered</h1>
            <div className='bg-white p-4 shadow-lg'>
                <p>icon</p>
                <p>service name</p>
            </div>
            <div className='absolute right-10 bottom-0' onClick={() => setShowModel(!showModel)}><button className='bg-green-500 py-2 px-3 capitalize text-white'>add service</button></div>
        </div>
        {showModel &&
        <div className='absolute w-full left-0 top-0 h-screen bg-black/25 '>
            <div className='bg-white  p-2 absolute top-1/4 left-4/4 translate-x-[30%] max-w-[70vw]'>
            <div onClick={()=> setShowModel(!showModel)} className='absolute cursor-pointer text-2xl hover:bg-red-500 hover:text-white right-2'><FaTimes /></div>
                <h1 className='capitalize font-bold text-center text-2xl'>services</h1>
                <div className='flex flex-wrap gap-4 '>
                {services.map(service => (
                    <div key={service.id} className='shadow-lg p-2'>
                        <p className='mb-2 capitalize'><span className='font-bold '>name: </span>{service.service}</p>
                        <p className='mb-2 capitalize'><span className='font-bold '>description: </span>{service.desc}</p>
                        <button onClick={addService} className='bg-green-500 py-2 px-3 capitalize text-white'>add</button>
                    </div>
                ))}
                </div>
            {/* <form onSubmit={handleSubmit}>
                <h1 className='capitalize font-bold text-2xl text-center'>add service</h1>
                <div className='flex flex-col'>
            <label htmlFor="service font-bold">select service</label>
            <select name="service" id="service" className='border-2 border-black/70 '>
                <option>select </option>
                <option value="service">airtime</option>
                <option value="service">bills</option>
            </select>
            </div>
            <button type='submit' className='bg-blue-500 text-white capitalize px-2 py-1 my-1'>add service</button>
            </form> */}
            </div>
        </div>
}
        </div>
    )
}
export default Services