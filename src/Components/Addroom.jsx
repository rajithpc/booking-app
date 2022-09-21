import React, { useState } from 'react'
import Aminities from './Aminities'
import Button from './Button'
import Input from './Input'
import "./Room"
const Addroom = ({setAddroom}) => {
  const [RoomNo,setRoomNo]=useState('')
  const [AdultCp,setAdultCp]=useState('')
  const [ChildCp,setchildCp]=useState('')
  const [Price,setPrice]=useState('')
  const [SelectArray,setSelectArray] = useState([])
  console.log(SelectArray);
  const senddata =(e)=>{
      e.preventDefault()
      console.log(RoomNo,AdultCp,ChildCp,Price);
      setAddroom(false);
  }
  return (
    <div className='pop'>
      <label className='lb-x' onClick={()=>{setAddroom(false)}}><svg xmlns="http://www.w3.org/2000/svg" height='25px' width='25px' viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></label>
      <form action='' method='post' onSubmit={senddata} >
      
      <div className='pop-items'>
        <Input n='number' text="Room Number" setState={setRoomNo}/>
        <Input n='number'text="Adult Capacity"setState={setAdultCp}/>
        <Input n='number'text="Children Capacity"setState={setchildCp}/>
        <Input n='number'text="Price"setState={setPrice}/>
        <div className='bt'>
        <Button text='Save' />
        
        </div>
        </div>

      </form>
      <div>
        <h2>Aminities</h2>
      <select className='addselect' onChange={(e)=>{setSelectArray([...SelectArray,e.target.value])}}>
            <option>select</option>
            <option value='AC'>AC</option>
            <option value='EXtra-Bed'>Extra Bed</option>
            <option value='TV'>TV</option>
            <option value='Coffie-maker'>Coffie Maker</option>
            

        </select>

      </div>
      <div>
        {SelectArray.map((data,index)=>{
          return(
            <Aminities select={SelectArray} data={data} key={index} index={index} SelectArray={setSelectArray} />
          )
        })}
      </div>
    </div>
    
  )
}

export default Addroom