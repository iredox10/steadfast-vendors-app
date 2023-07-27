import axios from "axios"
import FormInput from "../components/FormInput"
import path from "../utils/path"
import FormBtn from "../components/FormBtn"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import Logo from "../assets/nabrol-logo.png"
import vendorPic from "../assets/vendor-pic.jpg"
import { FaExclamation } from "react-icons/fa"
import { Error } from "../components/Error"

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [err, setErr] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErr("please fill in all fields")
      return
    }
    if (password !== confirmPassword) {
        setErr("passwords do not match")
        return
      }
      if (password.length < 6) {
        setErr("passwords must be at least 6 characters")
        return
      }
    try {
      const res = await axios.post(`${path}/vendor/register`, {
        firstName,
        lastName,
        email,
        password,
      })
      navigate(`/customize/${res.data.vendor.id}`)
    } catch (error) {
      setErr(error.response.data.errors[0].message)
      console.log(error.response.data.errors[0].message)
    }
  }

  return (
    <div className="bg-[url(../assets/steadfastLogo.)]">
      <nav className="flex items-center bg-white p-2 shadow-lg md:p-6 justify-between">
        <div className="w-[10%] ">
          <img
            src={Logo}
            alt=""
            className="w-[100%]"
          />
        </div>
        <h1 className="m-2 text-xl font-bold capitalize ">
          welcome to nabrol super agent
        </h1>
      </nav>
      <div>
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
            <div>
              <h1 className="my-1 text-center text-2xl font-bold capitalize text-blue-500">
                Register
              </h1>
              <p className="capitalize text-gray-500 font-medium my-2 ">sign up to create an account</p>
            </div>
            {err && <Error err={err} />}
            <form onSubmit={handleSubmit}>
              <FormInput
                type={`text`}
                label={`first name`}
                labelFor={`first name`}
                onchange={(e) => setFirstName(e.target.value)}
              />
              <FormInput
                type={`text`}
                label={`last name`}
                labelFor={`last name`}
                onchange={(e) => setLastName(e.target.value)}
              />
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
              <FormInput
                type={`password`}
                label={`confirm password`}
                labelFor={`confirm password`}
                onchange={(e) => setconfirmPassword(e.target.value)}
              />
              <FormBtn text={`register`} />
              <p className="my-2 capitalize">
                already has an account{" "}
                <Link
                  to={"/login"}
                  className="text-blue-500 hover:font-bold hover:underline"
                >
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
