import React, { useState } from 'react'
import "./Room.css"
import Table from './Table'
import { Roomdata } from '../Pages/Roomdata'
import Button from './Button'
import Addroom from './Addroom'
// import Tabledetails from './Tabledetails'
import "./popup.css"
const Room = () => {
  const [Addroomm, setAddroom] = useState(false)
  function popupfunction() {
  
    setAddroom(true);
  }
  return (
    <div>
    <div className='main-div' >
      <div className='head-div'>
        <div className='name'><h2>Rooms</h2></div>
        <Button text='Add Room' functionality={popupfunction} cnbtn='btnaddroom'/>

      </div>
        <div className='table'><Table data={Roomdata} setAddroom={setAddroom}/></div>

    </div>
    <div className={Addroomm ? "popupfunction":""}>
            {Addroomm && <Addroom setAddroom={setAddroom}/>}
            
        </div>
    </div>
  )
}

export default Room