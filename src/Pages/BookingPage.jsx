import React from 'react'
import Booking from '../Components/Booking/Booking'
import NavBar from '../Components/NavBar'
import { bookingDetail } from './bookingDetail'


const BookingPage = () => {
  return (
    <div>
        <NavBar/>
        <div>
            <Booking value={bookingDetail}/>
            
        </div>
    </div>
  )
}

export default BookingPage