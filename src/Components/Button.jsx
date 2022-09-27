import React from 'react'
import "./Button.css"
const Button = ({text,onClick,cnbtn}) => {
  return (
    <div>
        <button className={cnbtn} onClick={onClick} >{text}</button> 
    </div>
  )
}

export default Button