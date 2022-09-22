import React from 'react'
import "./Button.css"
const Button = ({text,functionality,cnbtn}) => {
  return (
    <div>
        <button className={cnbtn} onClick={functionality} >{text}</button> 
    </div>
  )
}

export default Button