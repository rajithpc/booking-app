import React from 'react'
import {NavLink} from "react-router-dom"
import "./Burger.css"

const Burger = () => {
  return (
<div className='burger-main'>
  
        <div className='burger-class'>
        <NavLink to='/' className='burger-link' style={({isActive})=>({color: isActive ? 'orange':'black'})}>Home</NavLink></div>
        <div className='burger-class'>
        <NavLink to='/Room' className='burger-link'style={({isActive})=>({color:isActive ? 'orange':'black'})}>Room</NavLink></div>
        <div className='burger-class'>
        <NavLink to='/Booking' className='burger-link'style={({isActive})=>({color:isActive ? 'orange':'black'})}>Booking</NavLink></div>
      
        <div className='burger-class'>Administrator</div>
        
    </div>
  )
}

export default Burger