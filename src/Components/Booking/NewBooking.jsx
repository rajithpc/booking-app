import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiCall from '../../Sevices/apiCall'

const NewBooking = () => {
  const [bookingData,setBookingdata] = useState({
    guestFirstname:"",
    guestLastname:"",
    checkinDate:"",
    checkoutDate:"",
    numberofAdults:"",
    numberofChildrens:""
  });
  const [room,setRoom]=useState(null)
    
  const onChange=(value,key)=>{
    if(room)return
    setBookingdata({
      ...bookingData,
      [key]:value
    })
  }
  
  const sendData = async(e)=>{
    e.preventDefault()
   
  //   console.log(bookingData)
  //  let  res = await addBooking();
  //    console.log(res);
  }
  

const {guestFirstname,guestLastname,checkinDate,checkoutDate,numberofAdults,numberofChildrens} = bookingData

const getAvailablerooms= async()=>{
  let room = await getRooms();
  if(room.id){
    setRoom(room);
    setGetAvailableroom(true)
  }
}

const book= async()=>{
  const booking = await addBooking();
  console.log(booking);
}

const formatBooking=()=>{
  return {
    ...bookingData,
    checkinDate: new Date(bookingData.checkinDate).toISOString(),
    checkoutDate: new Date(bookingData.checkoutDate).toISOString(),
  }
}

  
const addBooking =()=>apiCall("/booking","POST",{...formatBooking(),roomId:room.id,status:"Booked"})
const getRooms =()=>apiCall("/get-rooms","POST",formatBooking())
  
  const [GetAvailableroom,setGetAvailableroom] = useState(false)
  const [Booknow,setBooknow]=useState(false)
  const navigate=useNavigate()
  

  // const showNewBookings=()=>{
  //   {}
  // }
  return (
    <div className='main-div'>
        <div className='head-newb'><h2>New Booking</h2></div>
        <div><Input value={guestFirstname} text='Guest First Name' setState={(value)=>onChange(value,"guestFirstname")}/></div>
        <div><Input value={guestLastname} text='Guest Last Name' setState={(value)=>onChange(value,"guestLastname")}/></div>
        <div><Input value={checkinDate} text='Check In Date'n='date' setState={(value)=>onChange(value,"checkinDate")} /></div>
        <div><Input value={checkoutDate} text='Check Out Date' n='date' setState={(value)=>onChange(value,"checkoutDate")} /></div>
        <div><Input value={numberofAdults} text='numberofAdults' n='number' setState={(value)=>onChange(value,"numberofAdults")} /></div>
        <div><Input value={numberofChildrens} text='numberofChildrens' n='number' setState={(value)=>onChange(value,"numberofChildrens")} /></div>

        <div className='btns'>
          <div className='btns-1'>
            <div className='btn-get'><Button cnbtn="getbtn" text='Get Available Room' onClick={getAvailablerooms} /></div>
           {GetAvailableroom && <div className='btn-book'><Button cnbtn='bookbtn' text="Book now" onClick={book}/>
           <label  onClick={()=>{navigate(-1)}} className='lbl-back'>Back</label></div>}
           </div>
           {Booknow && <div className='btns-book'><Button text="check in" cnbtn='btnci'/><Button cnbtn='btnco' text="check out"/><Button cnbtn='btnc' text="cancel"/> </div>}
           </div>
    </div>
  )
}

export default NewBooking