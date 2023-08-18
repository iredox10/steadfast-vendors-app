import React, { useState } from "react"
import CustomerSidebar from "../components/CustomerSidebar"
import FormInput from "../components/FormInput"
import { useParams } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import path from "../utils/path"
import { FaExclamation } from "react-icons/fa"
import Title from "../components/Title"
import CustomerHeader from "../components/CustomerHeader"

const CustomerBuyAirtime = () => {
  const {id} = useParams()

  const {data:customer,error,loading} = UseFetch(`${path}/customer/get-customer/${id}`)
  const [msg, setMsg] = useState('')
  const [network, setNetwork] = useState('')
  const [mobile, setMobile] = useState('')
  const [amount, setAmount] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if(network === '' || mobile === '' || amount === ''){
      setMsg('all fields are required')
      return
    }else if(customer.walletBalance <= 0 ){
      setMsg(`insufficient fund your wallet is: ₦${customer.walletBalance}`)
      return
    }else{
      alert('airtime bought successfully')
    }
  }

  return (
    <div>
      <CustomerHeader />
    <div className="flex gap-2">
      <CustomerSidebar id={id}  />
      <div className="w-full p-2 shadow-lg my-5 mx-2 ">
        <Title title={'buy airtime'} />
        <div className="mt-3">
        {msg &&  <div className="text-red-500 text-center font-bold capitalize text-2xl"> {msg}</div> }
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <label
              for="network"
              className="mb-2 text-xl block  font-medium"
            >
            Select Network
            </label>
            <select
              id="network"
              className="block w-full rounded-lg border border-blue-300 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-500 dark:bg-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option selected disabled>Choose Network</option>
              <option value="mtn">MTN</option>
              <option value="glo">GLO</option>
              <option value="airtel">AIRTEL</option>
              <option value="9mobile">9MOBILE</option>
            </select>
          </div>
          <FormInput
            label={"mobile number"}
            type={"number"}
            placeholder={"network"}
            onchange={e => setMobile(e.target.value)}
          />
          <FormInput
            label={"amount"}
            type={"number"}
            placeholder={"amount"}
            onchange={e => setAmount(e.target.value)}
          />
          <button className="bg-blue-500 text-white w-4/5 my-3 p-2 capitalize font-bold hover:bg-blue-400 block mx-auto">buy now </button>
        </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CustomerBuyAirtime
