import React from 'react'
import "./Booking"
const BookingDetails = ({value}) => {
  return (
    <div>
            <div className='booking-details'>
        <div className='FirstName'><label>{value.FirstName}</label></div>
        <div className='LastName'><label>{value.LastName}</label></div>
        <div className='RoomNo'><label>{value.RoomNo}</label></div>
        <div className='CheckinDate'><label>{value.CheckinDate}</label></div>
        <div className='CheckoutDate'><label>{value.CheckoutDate}</label></div>
        <div className='Status'><label>{value.Status}</label></div>
    </div>
    
    </div>
  )
}

export default BookingDetails