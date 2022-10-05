import React from 'react'
import "./Details.css"
import Button from './Button'
const Details = ({data,btn_text}) => {
  return (
    <div className='d-body'>
        
          <div> 
            <label>{data.guestFirstName+" "+data.guestLastName} </label>
              {/* {(data.status === "Check In" || data.status === "Booked") &&
            <div><label>{data.checkInDate}</label> </div>
             }

            {(data.status === "Check Out" || data.status === "Booked") &&
                        <div><label>{data.checkOutDate}</label> </div>
              } */}
              
          </div>
          <div><label>{data.room.roomNumber}</label> </div>
          <div><Button text={btn_text} cnbtn='btncio'/></div>
          
            
        
    </div>
   
  ) 
}

export default Details