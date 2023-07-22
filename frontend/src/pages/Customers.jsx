import { useParams } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import path from "../utils/path"
import Dashboard from "./Dashboard"

const Customers = () => {
    const {id} = useParams()
    const {data:customers,loading,errro}  = UseFetch(`${path}/customer/get-customers/${id}`)
    // console.log(customers.customers)

  return (
    <div className="flex gap-5">
        <div>
        <Dashboard />
        </div>
        <div className="w-full p-5">
        <h1 className='text-center capitalize pb-2 md:text-2xl font-bold'>Registered customers </h1>

        <table className="w-full text-center">
        <thead className='w-full border bg-green-500 capitalize text-white'>
            <tr className="">
                <th className="capitalize border ">first name</th>
                <th className="capitalize border ">username</th>
                <th className="capitalize border ">email</th>
                <th className="capitalize border ">phone Number</th>
            </tr>
            </thead>
        {customers && customers.customers.map(customer =>(
            <>
                <tbody className="w-full">
                <tr className="">
                    <td className="border p-2 capitalize">{customer.fullName}</td>
                    <td className="border p-2 capitalize">{customer.username}</td>
                    <td className="border p-2 capitalize">{customer.email}</td>
                    <td className="border p-2 capitalize">{customer.phoneNumber}</td>
                </tr>
                </tbody>
            </>
        ))}
                </table>
                </div>
    </div>
  )
}

export default Customers