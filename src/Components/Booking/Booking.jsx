
import React from 'react'
import Button from '../Button'
import Input from '../Input'
import "./Booking.css"
import BookingDetails from './BookingDetails'
import {NavLink} from "react-router-dom"


const Booking = ({value}) => {
  return (
    <div>
         <div className='main-div'>
            <div className='namheade'>
            <div className='lbbooking'><h2>Booking</h2></div>
            <NavLink to='/NewBookingPage' className='lbnewbooking'>New Booking</NavLink> 

            </div>
            <div className='booking-bar'>
                <Input/>
                <Input/>
                <div className='bt'>
                <Button text='search'/>
                </div>
            </div>
            <div className='head-details'>

            <div className='booking-head'>
              <div>Guest First Name</div>
              <div>Guest Last Name </div>
              <div>Room Number </div>
              <div>Check In Date </div>
              <div>Check Out Date </div>
              <div>Status</div>

            </div>
 
           {value.map((data,index)=>{
            return(
               <BookingDetails value={data} key={index}/>
            )
             })} 
            </div>  
            
        </div>
        
    </div>
  )
}

export default Booking