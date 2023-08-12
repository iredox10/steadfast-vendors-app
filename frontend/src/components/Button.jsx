import React from 'react'

const Button = ({text,bg,tColor}) => {
  return (
    <div>
        <button className={`${bg-[bg]} ${text-[tColor]}`}>{text}</button>
    </div>
  )
}

export default Button