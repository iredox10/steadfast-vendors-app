import { useState } from "react"
import Dashboard from "./Dashboard"
import UseFetch from "../hooks/UseFetch"
import path from "../utils/path"
import { FaPlus, FaTimes } from "react-icons/fa"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import FormInput from "../components/FormInput"
import VendorHeader from "../components/VendorHeader"

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
    console.log(data);
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
    <div>
      <VendorHeader />
    <div className="relative flex ">
      <Dashboard />
      <div className="grid grid-cols-4 items-center gap-3 p-4">
        {services &&
          services.map((service) => (
            <div
              key={service.id}
              className=" bg-white text-center shadow-lg p-2"
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
    </div>
  )
}
export default Services