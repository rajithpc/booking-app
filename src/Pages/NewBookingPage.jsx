import React from 'react'
import NewBooking from '../Components/Booking/NewBooking'
import NavBar from '../Components/NavBar'

const NewBookingPage = () => {
  return (
    <div>
        <NavBar/>
        <div>
            <NewBooking/>
        </div>
    </div>
  )
}

export default NewBookingPage