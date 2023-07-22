import axios from "axios"
import FormInput from "../components/FormInput"
import path from "../utils/path"
import FormBtn from "../components/FormBtn"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import Logo from "../assets/nabrol-logo.png"
import vendorPic from "../assets/vendor-pic.jpg"
import { Error } from "../components/Error"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")
  const [vendor, setVendor] = useState()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      setErr("please fill in all fields")
      return
    }
    try {
      const res = await axios.post(`${path}/vendor/login`, { email, password })
      navigate(`/customize/${res.data.vendor.id}`)
      // if(res.data.vendor.about === null || res.data.vendor.primaryColor === null ||res.data.vendor.secondaryColor === null || res.data.vendor.companyName === null){
      //     navigate(`/customize/${res.data.vendor.id}`)
      // }else{
      //     navigate(`/vendor/${res.data.vendor.id}`)
      // }
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="">
      <nav className="bg-white p-2 shadow-lg flex justify-between items-center md:p-4 ">
        <div className="w-[10%]">
          <img
            src={Logo}
            alt=""
            className="w-[100%]"
          />
        </div>
      <h1 className="m-2 font-bold capitalize">
        welcome back to nabrol super agent
      </h1>
      </nav>
      <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5),rgba(0,0,0,0.2)),url(${vendorPic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "1rem",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '87vh'
          }}
        >
        <div className="mx-10 bg-white p-4 shadow-lg min-w-full md:min-w-[40%]">
          {/* <img src={} alt="steadfast logo" /> */}
          <h1 className="my-3 text-center text-2xl font-bold capitalize text-blue-500">
            Login
          </h1>
          {err && <Error err={err} />}
          <form onSubmit={handleSubmit}>
            <FormInput
              type={`email`}
              label={`email`}
              labelFor={`email`}
              onchange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              type={`password`}
              label={`password`}
              labelFor={`password`}
              onchange={(e) => setPassword(e.target.value)}
            />
            <FormBtn text={`login`} />
            <p className="my-2 capitalize">
              Don't have an account?{" "}
              <Link
                to={"/"}
                className="text-blue-500 hover:font-bold hover:underline"
              >
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Login
