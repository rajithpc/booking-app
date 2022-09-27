import React, { useState,useEffect } from 'react'
import "./Room.css"
import Table from './Table'
import Button from './Button'
import Addroom from './Addroom'
// import Tabledetails from './Tabledetails'
import "./popup.css"
import apiCall from '../Sevices/apiCall'
const Room = () => {
  const [Addroomm, setAddroom] = useState(false)
  const [roomData,setRoomdata]= useState([])
  const [isEdit,setIsEdit]=useState(null)
  const [deleteId,setDeleteid]=useState(null)
 
  const Delete= async()=>{
    await apiCall(`/rooms/${deleteId}`,"DELETE")
    setDeleteid(null)
  }

  console.log(deleteId);

  useEffect(()=>{

    apiCall("/rooms")
    .then(response=>{
      setRoomdata(response);
    })
  },[Addroomm,deleteId])
  

  function popupfunction() {
  
    setAddroom(true);
  }  
  return (
    <div>
    <div className='main-div' >
      <div className='head-div'>
        <div className='name'><h2>Rooms</h2></div>
        <Button text='Add Room' onClick={popupfunction} cnbtn='btnaddroom'/>

      </div>
        <div className='table'><Table setDeleteid={setDeleteid} setIsEdit={setIsEdit} data={roomData} setAddroom={setAddroom}/></div>

    </div>
    <div className={Addroomm || deleteId ? "popupfunction":""}>
            {Addroomm && <Addroom roomData={roomData} deleteId={deleteId} setIsEdit={setIsEdit} isEdit={isEdit}   setAddroom={setAddroom}/>}
          
            {deleteId && 
           
           <div className='dlt-pop'>
             <div>
              Are you sure ?. Want to delete.
             </div>
             <div><Button text="Delete" cnbtn="btn-dlt" onClick={Delete}/> </div><div> <Button text="Cancel" onClick={()=>setDeleteid(null)} /> </div>
           </div>

        }
        </div>

    </div>
  )
}

export default Room