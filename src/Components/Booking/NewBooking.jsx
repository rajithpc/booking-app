import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiCall from '../../Sevices/apiCall'
import { useEffect } from 'react'
// import Booking from './Booking'
import { updateStatus } from '../../Sevices/api'

const NewBooking = () => {
  const {id} = useParams();
  const [status,setStatus]=useState();
  const [GetAvailableroom,setGetAvailableroom] = useState(false)
  const [Booknow,setBooknow]=useState(false)
  // const [showRoom, setShowroom] = useState(false)
  const [room,setRoom]=useState(null)
  const [booking,setBooking] = useState(null);
  const [bookingData,setBookingdata] = useState({
    guestFirstName:"",
    guestLastName:"",
    checkInDate:"",
    checkOutDate:"",
    numberOfAdults:"",
    numberOfChild:""
  });



  const getBookingData = async ()=>{
    const data = await apiCall(`/booking/${id}`);
    if(data){
      setBookingdata({
        ...data,
        checkInDate:data.checkInDate.split("T")[0],
        checkOutDate:data.checkOutDate.splpit("T")[0]
      })
      setRoom(data.room);
      setStatus(data.status)
      setBooking(data)
    }
    console.log(data)
    console.log(booking);
  }
  useEffect(()=>{
    if(!id)return;
    getBookingData();
  })
  console.log(status);

  const {guestFirstName,guestLastName,checkInDate,checkOutDate,numberOfAdults,numberOfChild} = bookingData
  const onChange=(value,key)=>{
    if(room)return
    setBookingdata({
      ...bookingData,
      [key]:value
    })
  }
  
const getAvailablerooms= async()=>{
  let room = await getRooms();
  if(room.id){
    setRoom(room);
    setGetAvailableroom(true);
    // setShowroom(true)
   
  }
}

const book= async()=>{
  const booking = await addBooking();
  setBooking(booking)
  setBooknow(true)
  setStatus("Booked")
}

const formatBooking=()=>{
  return {
    ...bookingData,
    checkInDate: new Date(bookingData.checkInDate).toISOString(),
    checkOutDate: new Date(bookingData.checkOutDate).toISOString(),
  }
}
const ChangeStatus =async(status)=>{
   await updateStatus(booking.id,status);
   setStatus(status)
}
console.log();
  
const addBooking =()=>apiCall("/booking","POST",{...formatBooking(),roomId:room.id,status:"Booked"})
const getRooms =()=>apiCall("/get-rooms","POST",formatBooking())

  

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
     {GetAvailableroom && <div><h3> <label>Room number :</label>{room.roomNumber}</h3>
    <h3> <label>Price :</label>{room.price}</h3>
     </div>} 
     
        <div className='btns'>
          <div className='btns-1'>
            <div className='btn-get'><Button cnbtn="getbtn" text='Get Available Room' onClick={getAvailablerooms} /></div>
           {room && <div className='btn-book'><Button cnbtn='bookbtn' text="Book now" onClick={book}/>
           <label  onClick={()=>{navigate(-1)}} className='lbl-back'>Back</label></div>}
           </div>
           {Booknow && <div className='btns-book'><Button text="check in" disabled={status !== "Booked"} cnbtn='btnci'onClick={()=>{
            
            ChangeStatus("Check In");
           }}/><Button cnbtn='btnco' disabled={status !== "Check In"} text="check Out"onClick={()=>{
            
            ChangeStatus("Check Out");
            }}/><Button cnbtn='btnc' disabled={status !== "Booked"} text="cancel"onClick={()=>{
              
              ChangeStatus("Cancelled");
              }} /> </div>}
           </div>
    </div>
  )
}

export default NewBooking