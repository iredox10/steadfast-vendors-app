import React from 'react'
import { FaExclamation, FaExclamationCircle } from 'react-icons/fa'

export const Error = ({err}) => {
  return (
     <div className="text-red-500 flex gap-2 items-center my-2 font-bold capitalize"><FaExclamationCircle /> {err}</div>
  )
}
