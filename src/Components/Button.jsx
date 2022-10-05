import React from 'react'
import "./Button.css"
const Button = ({text,onClick,cnbtn,disabled=false}) => {
  return (
    <div>
        <button className={`${cnbtn} ${disabled && "disabled"}` } onClick={(e)=>!disabled &&  onClick(e)}  >{text}</button> 
    </div>
  )
}

export default Button