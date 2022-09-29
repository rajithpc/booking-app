import React from 'react'
import "./Booking"
const BookingDetails = ({newBookingdata}) => {
  return (
    <div>
            <div className='booking-details'>
        <div className='FirstName'><label>{newBookingdata.guestFirstname}</label></div>
        <div className='LastName'><label>{newBookingdata.guestLastname}</label></div>
        <div className='RoomNo'><label>{newBookingdata.roomNumber}</label></div>
        <div className='CheckinDate'><label>{newBookingdata.checkinDate}</label></div>
        <div className='CheckoutDate'><label>{newBookingdata.checkoutDate}</label></div>
        <div className='Status'><label>{newBookingdata.status}</label></div>
    </div>
    
    </div>
  )
}

export default BookingDetails