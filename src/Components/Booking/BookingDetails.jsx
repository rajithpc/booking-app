import React from 'react'
import "./Booking"
const BookingDetails = ({newBookingdata}) => {
  return (
    <div>
            <div className='booking-details'>
        <div className='FirstName'><label>{newBookingdata.guestFirstName}</label></div>
        <div className='LastName'><label>{newBookingdata.guestLastName}</label></div>
        <div className='RoomNo'><label>{newBookingdata.room.roomNumber}</label></div>
        <div className='CheckinDate'><label>{newBookingdata.checkInDate}</label></div>
        <div className='CheckoutDate'><label>{newBookingdata.checkOutDate}</label></div>
        <div className='Status'><label>{newBookingdata.status}</label></div>
    </div>
    
    </div>
  )
}

export default BookingDetails