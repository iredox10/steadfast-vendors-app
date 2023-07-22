import React from 'react'
import Dashboard from './Dashboard'
import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'

const Feedback = () => {
  const {id} = useParams()
  const {data:feedbacks, isLoading, error} = UseFetch(`${path}/feedback/get-feedbacks/${id}`)
  console.log(feedbacks);
  return (
    <div>
      <div className='flex'>
        <Dashboard />
        <div className='w-full p-5'>
          <h1 className='text-center capitalize pb-2 md:text-2xl font-bold'>your feedbacks </h1>
              <table className='w-full border  text-center '>
                <thead className='w-full border bg-blue-500 capitalize text-white'>
                  <tr className=''>
                    <th className='border'>name</th>
                    <th className='border'>email</th>
                    <th className='border'>subject</th>
                    <th className='border'>message</th>
                  </tr>
                </thead>
          {feedbacks && feedbacks.feedbacks.map(feedback => (
            <>
              <tbody>
                <tr>
                  <td className='border p-2 capitalize '>{feedback.name}</td>
                  <td className='border p-2 capitalize '>{feedback.email}</td>
                  <td className='border p-2 capitalize '>{feedback.subject}</td>
                  <td className='border p-2 capitalize '>{feedback.message}</td>
                </tr>
              </tbody>
            </>
          ))}
              </table>
        </div>
        </div>
        </div>
  )
}

export default Feedback