import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import path from "../utils/path"
import FormInput from "../components/FormInput"
import FormBtn from "../components/FormBtn"
import axios from "axios"
import Dashboard from "./Dashboard"

const Customize = () => {
  const { id } = useParams()
  const {
    data: vendor,
    error,
    loading,
  } = UseFetch(`${path}/vendor/get-vendor/${id}`)

  const [companyName, setCompanyName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [contactAddress, setContactAddress] = useState("")
  const [about, setAbout] = useState("")
  const [logo, setLogo] = useState("")
  const [err, setErr] = useState("")

  const [primaryColor, setPrimaryColor] = useState("")
  const [secondaryColor, setSecondaryColor] = useState("")
  const [tertiaryColor, setTertiaryColor] = useState("")
  const [textColor, setTextColor] = useState('')
  //   const [vendor, setVendor] = useState(data)

  useEffect(() => {
    vendor &&
      setTimeout(() => {
        setCompanyName(vendor.companyName)
        setAbout(vendor.about)
        setContactAddress(vendor.contactAddress)
        setContactEmail(vendor.contactEmail)
        setContactNumber(vendor.contactNumber)
        setPrimaryColor(vendor.primaryColor)
        setSecondaryColor(vendor.secondaryColor)
        setTertiaryColor(vendor.tertiaryColor)
        setTextColor(vendor.textColor)
      }, 1000)
  }, [vendor])

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('primaryColor', primaryColor)
    data.append('secondaryColor', secondaryColor)
    data.append('tertiaryColor', tertiaryColor)
    data.append('textColor', textColor)
    data.append('companyName', companyName)
    data.append('contactEmail', contactEmail)
    data.append('contactNumber', contactNumber)
    data.append('contactAddress', contactAddress)
    data.append('about', about)
    data.append('logo', logo)
    
    if(primaryColor === '' || secondaryColor === '' || tertiaryColor === ''){
        setErr('you can not leave the colors empty')
        return
    }
    if (
      companyName === "" &&
      contactEmail === "" &&
      contactNumber === "" &&
      contactAddress === "" &&
      about === "" &&
      logo === ""
    ) {
      setErr("please fill in all fields")
      return
    }
    try {
      // const res = await axios.patch(`${path}/vendor/update-vendor/${id}`, {
      //   companyName,
      //   contactEmail,
      //   contactNumber,
      //   contactAddress,
      //   about,
      //   logo,
      //   primaryColor,
      //   secondaryColor,
      //   tertiaryColor
      // })
      const res = await axios.patch(`${path}/vendor/update-vendor/${id}`, {
        data
      })
      console.log(res.data);
      const vendor = await axios.get(`${path}/vendor/get-vendor/${id}`)
      console.log(vendor.data)
        // navigate(`/vendor/${id}`)
      //   setVendor(res.data.vendor)
      setErr("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {loading && <p>loading...</p>}
      <div>
        {vendor && (
          <div className="flex">
            <Dashboard />
            <div className="px-4 md:w-[100%]">
              <div className="bg-yellow-300 md:p-4">
                <h1 className="font-bold md:text-xl capitalize">welcome, {vendor.firstName} {vendor.lastName} :)</h1>
                <button>logout</button>
              </div>
              <form onSubmit={handleSubmit} >
              {err && <p className="text-red-500">{err}</p>}
                    <p className="capitalize font-medium mb-2">select color for your page:</p>
                <div className="flex gap-3">
                    <div className="flex flex-col  gap-2 capitalize">
                        <label htmlFor="primary color">primary color: </label>
                        <input type="color" name="primary color" id="" value={primaryColor} onChange={(e)=>setPrimaryColor(e.target.value)} />
                    </div>
                    <div className="flex flex-col  gap-2 capitalize">
                        <label htmlFor="secondary color">secondary color: </label>
                        <input type="color" name="secondary color" id="" value={secondaryColor} onChange={(e)=>setSecondaryColor(e.target.value)} />
                    </div>
                    <div className="flex flex-col  gap-2 capitalize">
                        <label htmlFor="tertiary color">tertiary color: </label>
                        <input type="color" name="tertiary color" id="" value={tertiaryColor} onChange={(e)=>setTertiaryColor(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2 capitalize">
                        <label htmlFor="text color">text color: </label>
                        <input type="color" name="text color" id="" value={textColor} onChange={(e)=>setTextColor(e.target.value)} />
                    </div>
                </div>
                <div>
                <FormInput
                  type={`text`}
                  label={`company name`}
                  labelFor={`company name`}
                  value={companyName}
                  onchange={(e) => setCompanyName(e.target.value)}
                />
                <FormInput
                  type={`text`}
                  label={`contact email`}
                  labelFor={`contact email`}
                  value={contactEmail}
                  onchange={(e) => setContactEmail(e.target.value)}
                />
                <FormInput
                  type={`text`}
                  label={`contact number`}
                  labelFor={`contact number`}
                  value={contactNumber}
                  onchange={(e) => setContactNumber(e.target.value)}
                />
                <FormInput
                  type={`text`}
                  label={`contact address`}
                  labelFor={`contact address`}
                  value={contactAddress}
                  onchange={(e) => setContactAddress(e.target.value)}
                />
                <div>
                  <label htmlFor="about">About</label>
                  <textarea
                    placeholder="about you..."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="w-full border-2 border-blue-500"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="logo">logo</label>
                  <input
                    type="file"
                    name="logo"
                    id=""
                    onChange={(e) => setLogo(e.target.files[0])}
                  />
                </div>
                <div className="flex items-center justify-between mt-1">
                <FormBtn text={`edit`} />
                <Link to={`/vendor/${id}`} className="font-bold capitalize hover:text-blue-700">visit page</Link>
                </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Customize
