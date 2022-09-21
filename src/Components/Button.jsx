import React from 'react'
import "./Button.css"
const Button = ({text,functionality}) => {
  return (
    <div>
        <button className='btn' onClick={functionality} >{text}</button> 
    </div>
  )
}

export default Button