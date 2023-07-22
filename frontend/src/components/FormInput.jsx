import React from "react"

const FormInput = ({ labelFor, label, type, onchange, value }) => {
  return (
    <div className="flex flex-col capitalize">
      <label
        htmlFor={labelFor}
        className="mt-1 font-medium"
      >
        {label}:
      </label>
      <input
        type={type}
        name={labelFor}
        onChange={onchange}
        className="mt-1 border-2 border-blue-500 py-2 px-1"
        value={value}
      />
    </div>
  )
}

export default FormInput
