import React from 'react'

const FormBtn = ({text}) => {
  return (
    <button
    className='bg-blue-500 hover:bg-blue-600 hover:text-black text-white p-2 capitalize font-bold mt-2'
     type='submit'>{text}</button>
  )
}

export default FormBtn