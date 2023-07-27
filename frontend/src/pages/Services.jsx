import { useState } from "react"
import Dashboard from "./Dashboard"
import UseFetch from "../hooks/UseFetch"
import path from "../utils/path"
import { FaPlus, FaTimes } from "react-icons/fa"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import FormInput from "../components/FormInput"

const Services = () => {
  // const {data:services,error,loading} = UseFetch(`${path}/get-services`)
  const { id } = useParams()
  // console.log(services);
  const [showModel, setShowModel] = useState(false)
  const [name, setName] = useState("")
  const [logo, setLogo] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowModel(!showModel)
    const data = new FormData()
    data.append("name", name)
    data.append("logo", logo)

    try {
      const res = await axios.post(
        `${path}/vendor/add-data-service/${id}`,
        data
      )
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  const {
    data: services,
    error: err,
    loading,
  } = UseFetch(`${path}/vendor/get-data-services/${id}`)

  return (
    <div className="relative flex ">
      <Dashboard />
      <div className="grid grid-cols-4 items-center gap-3 p-4">
        {services &&
          services.map((service) => (
            <div
              key={service.id}
              className=" bg-white text-center shadow-lg"
            >
              <div className="w-max-[50%]">
                <div className="">
                  <img
                    src={service.logo}
                    alt="service logo"
                    className="w-[100%] rounded-full"
                  />
                </div>

                <Link to={`/plans/${id}/${service.id}`}>
                  <p className="my-2 text-2xl font-bold capitalize">
                    {service.name}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        <div>
          <button onClick={() => setShowModel(!showModel)}>
            <FaPlus />
          </button>
        </div>
        {showModel && (
          <div>
            <form onSubmit={handleSubmit}>
              <FormInput
                type={"text"}
                label={"name"}
                labelFor={"name"}
                onchange={(e) => setName(e.target.value)}
              />

              <FormInput
                type={"file"}
                label={"logo"}
                labelFor={"logo"}
                onchange={(e) => setLogo(e.target.files[0])}
              />
              <button type="submit">add</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
export default Services
//         <div className='px-10 py-2 w-full'>
//             <h1 className='capitalize text-center text-2xl font-bold '>services you offered</h1>
//             <div className='bg-white p-4 shadow-lg'>
//                 <p>icon</p>
//                 <p>service name</p>
//             </div>
//             <div className='absolute right-10 bottom-0' onClick={() => setShowModel(!showModel)}><button className='bg-green-500 py-2 px-3 capitalize text-white'>add service</button></div>
//         </div>
//         {showModel &&
//         <div className='absolute w-full left-0 top-0 h-screen bg-black/25 '>
//             <div className='bg-white  p-2 absolute top-1/4 left-4/4 translate-x-[30%] max-w-[70vw]'>
//             <div onClick={()=> setShowModel(!showModel)} className='absolute cursor-pointer text-2xl hover:bg-red-500 hover:text-white right-2'><FaTimes /></div>
//                 <h1 className='capitalize font-bold text-center text-2xl'>services</h1>
//                 <div className='flex flex-wrap gap-4 '>
//                 {services.map(service => (
//                     <div key={service.id} className='shadow-lg p-2'>
//                         <p className='mb-2 capitalize'><span className='font-bold '>name: </span>{service.service}</p>
//                         <p className='mb-2 capitalize'><span className='font-bold '>description: </span>{service.desc}</p>
//                         <button onClick={addService} className='bg-green-500 py-2 px-3 capitalize text-white'>add</button>
//                     </div>
//                 ))}
//                 </div>
//             {/* <form onSubmit={handleSubmit}>
//                 <h1 className='capitalize font-bold text-2xl text-center'>add service</h1>
//                 <div className='flex flex-col'>
//             <label htmlFor="service font-bold">select service</label>
//             <select name="service" id="service" className='border-2 border-black/70 '>
//                 <option>select </option>
//                 <option value="service">airtime</option>
//                 <option value="service">bills</option>
//             </select>
//             </div>
//             <button type='submit' className='bg-blue-500 text-white capitalize px-2 py-1 my-1'>add service</button>
//             </form> */}
//             </div>
//         </div>
// }
