
import React from 'react'
import Button from '../Button'
import Input from '../Input'
import "./Booking.css"
import BookingDetails from './BookingDetails'
import apiCall from '../../Sevices/apiCall'

import {NavLink} from "react-router-dom"
import { useEffect } from 'react'
import { useState } from 'react'



const Booking = ({value}) => {
  const [newBookingdata, setNewbookingdata] = useState([])
  // const [bookngId, setBookingid] = useState(null)
  useEffect(()=>{

    apiCall("/booking")
    .then(response=>{
      setNewbookingdata(response);
    })
  },[])
  return (
    <div>
         <div className='main-div'>
            <div className='namheade'>
            <div className='lbbooking'><h2>Booking</h2></div>
            <NavLink to='/NewBookingPage' className='lbnewbooking' >New Booking</NavLink>

            </div>
            <div className='booking-bar'>
                <Input/>
                <Input/>
                <div className='bt'>
                <Button text='search'cnbtn='btnsearch'/>
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
 
           {newBookingdata.map((data,index)=>{
            return(
               <BookingDetails newBookingdata={data} key={index} />
            )
             })} 
            </div>  
            
        </div>
        
    </div>
  )
}

export default Booking