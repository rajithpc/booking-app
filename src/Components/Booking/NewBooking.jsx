import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewBooking = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')

  const [CheckinDate, setCheckinDate] = useState('')
  const [CheckoutDate, setCheckoutDate] = useState('')
  
  const [GetAvailableroom,setGetAvailableroom] = useState(false)
  const [Booknow,setBooknow]=useState(false)
  const navigate=useNavigate()
  

  const showNewBookings=(e)=>{
    e.preventDefault()
    console.log(FirstName,LastName,CheckinDate,CheckoutDate);
  }
  return (
    <div className='main-div'>
        <div className='head-newb'><h2>New Booking</h2></div>
      <form method='POST' onSubmit={showNewBookings}>
        <div><Input text='Guest First Name' setState={setFirstName}/></div>
        <div><Input text='Guest Last Name' setState={setLastName}/></div>
        <div><Input text='Check In Date'n='date' setState={setCheckinDate} /></div>
        <div><Input text='Check Out Date' n='date' setState={setCheckoutDate} /></div>
        <div className='btns'>
          <div className='btns-1'>
            <div className='btn-get'><Button cnbtn="getbtn" text='Get Available Room'functionality={()=>{setGetAvailableroom(!GetAvailableroom)
           console.log(GetAvailableroom)
           
           }} /></div>
           {GetAvailableroom && <div className='btn-book'><Button cnbtn='bookbtn' text="Book now" functionality={()=>{setBooknow(!Booknow)}}/>
           <label  onClick={()=>{navigate(-1)}} className='lbl-back'>Back</label></div>}
           </div>
           {Booknow && <div className='btns-book'><Button text="check in" cnbtn='btnci'/><Button cnbtn='btnco' text="check out"/><Button cnbtn='btnc' text="cancel"/> </div>}
           </div>
      </form>
    </div>
  )
}

export default NewBooking