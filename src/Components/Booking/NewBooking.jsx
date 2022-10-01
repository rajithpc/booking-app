import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiCall from '../../Sevices/apiCall'
// import Booking from './Booking'

const NewBooking = () => {
  const [bookingData,setBookingdata] = useState({
    guestFirstName:"",
    guestLastName:"",
    checkInDate:"",
    checkOutDate:"",
    numberOfAdults:"",
    numberOfChild:""
  });
  const [room,setRoom]=useState(null)
  const [booking,setBooking] = useState(null);
  const onChange=(value,key)=>{
    if(room)return
    setBookingdata({
      ...bookingData,
      [key]:value
    })
  }
  
const {guestFirstName,guestLastName,checkInDate,checkOutDate,numberOfAdults,numberOfChild} = bookingData
const getAvailablerooms= async()=>{
  let room = await getRooms();
  if(room.id){
    setRoom(room);
    setGetAvailableroom(true);
    setShowroom(true)
   
  }
}

const book= async()=>{
  const booking = await addBooking();
  setBooking(booking)
  setBooknow(true);

}

const formatBooking=()=>{
  return {
    ...bookingData,
    checkInDate: new Date(bookingData.checkInDate).toISOString(),
    checkOutDate: new Date(bookingData.checkOutDate).toISOString(),
  }
}

  
const addBooking =()=>apiCall("/booking","POST",{...formatBooking(),roomId:room.id,status:"Booked"})
const getRooms =()=>apiCall("/get-rooms","POST",formatBooking())
const updateStatus = (status)=>apiCall("/booking","PUT",{id:booking.id,status})
  
  const [GetAvailableroom,setGetAvailableroom] = useState(false)
  const [Booknow,setBooknow]=useState(false)
  const [showRoom, setShowroom] = useState(false)
  const navigate=useNavigate()
  
  return (
    <div className='main-div'>
        <div className='head-newb'><h2>New Booking</h2></div>
        <div><Input value={guestFirstName} text='Guest First Name' setState={(value)=>onChange(value,"guestFirstName")}/></div>
        <div><Input value={guestLastName} text='Guest Last Name' setState={(value)=>onChange(value,"guestLastName")}/></div>
        <div><Input value={checkInDate} text='Check In Date'n='date' setState={(value)=>onChange(value,"checkInDate")} /></div>
        <div><Input value={checkOutDate} text='Check Out Date' n='date' setState={(value)=>onChange(value,"checkOutDate")} /></div>
        <div><Input value={numberOfAdults} text='Number of Adults' n='number' setState={(value)=>onChange(value,"numberOfAdults")} /></div>
        <div><Input value={numberOfChild} text='Number of Childrens' n='number' setState={(value)=>onChange(value,"numberOfChild")} /></div>
     {showRoom && <div><h3> <label>Room number :</label>{room.roomNumber}</h3>
    <h3> <label>Price :</label>{room.price}</h3>
     </div>} 
     
        <div className='btns'>
          <div className='btns-1'>
            <div className='btn-get'><Button cnbtn="getbtn" text='Get Available Room' onClick={getAvailablerooms} /></div>
           {GetAvailableroom && <div className='btn-book'><Button cnbtn='bookbtn' text="Book now" onClick={book}/>
           <label  onClick={()=>{navigate(-1)}} className='lbl-back'>Back</label></div>}
           </div>
           {Booknow && <div className='btns-book'><Button text="check in" cnbtn='btnci'onClick={()=>{
            updateStatus("Check In");
           }}/><Button cnbtn='btnco' text="check out"/><Button cnbtn='btnc' text="cancel" onClick={()=>{updateStatus("Check Out");}}/> </div>}
           </div>
    </div>
  )
}

export default NewBooking