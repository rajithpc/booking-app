import React, { useState,useEffect } from 'react'
import apiCall from '../Sevices/apiCall'
import Aminities from './Aminities'
import Button from './Button'
import Input from './Input'
import "./Room"
const Addroom = ({roomData,deleteId,Delete,setAddroom,isEdit,setIsEdit}) => {
  const [formData,setFormData]=useState({
    roomNumber:"",
    adultCapacity:"",
    childCapacity:"",
    price:""
    
  });
  

  useEffect(() => {
    
  
    if(isEdit)setFormData(roomData.find(r=>r.id === isEdit))
    console.log(isEdit);
    console.log(formData);
  }, [isEdit])
  
  const {roomNumber,adultCapacity,childCapacity,price} = formData;

  const onChange=(value,key)=>{
    setFormData({
      ...formData,
      [key]:value
    })
  }

  const [SelectArray,setSelectArray] = useState([])
  
  const senddata = async(e)=>{
      e.preventDefault()
      let res;
      if(isEdit){
      // console.log(formData)
      res = await updateRoom();
    }
    else{
      res = await addRoom();
      // console.log(formData);
    }
console.log(res);
      closeWindow();
  };
  
   


   const addRoom =()=>apiCall("/rooms","POST",formData)
   const updateRoom=()=>apiCall(`/rooms/${formData.id}`,"PUT",formData)
   


   const closeWindow=()=>{
    setAddroom(false);
    setIsEdit(null);
   }

  return (
    <div className='pop'>
      <div className='lb-x' onClick={()=>{
        setAddroom(false);
        setIsEdit(null);
      }}><svg xmlns="http://www.w3.org/2000/svg" height='25px' width='25px' viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></div>

      
      <div className='pop-items'>
        <Input n='number' value={roomNumber} text="Room Number" setState={(value)=>onChange(value,"roomNumber")}/>
        <Input n='number' value={adultCapacity} text="Adult Capacity" setState={(value)=>onChange(value,"adultCapacity")}/>
        <Input n='number' value={childCapacity} text="Children Capacity" setState={(value)=>onChange(value,"childCapacity")}/>
        <Input n='number' value={price} text="Price" setState={(value)=>onChange(value,"price")}/>
        
        <div className='bt'>
        <Button onClick={senddata} cnbtn="btnsave" text='Save' />
        
        </div>
        </div>
      
        
      {isEdit &&
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
}
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