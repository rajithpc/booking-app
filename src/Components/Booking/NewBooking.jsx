import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { useState } from 'react'

const NewBooking = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')

  const [CheckinDate, setCheckinDate] = useState('')
  const [CheckoutDate, setCheckoutDate] = useState('')

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
        <div><Button text='Get Available Room' /></div>
      </form>
    </div>
  )
}

export default NewBooking