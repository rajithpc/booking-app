import React from 'react'
import Tabledetails from './Tabledetails'
import './Table.css'

const Table = ({data,setDeleteid,setAddroom,setIsEdit}) => {
  return (
    <div>
    
     <div className='title'>
        <div className='headertable'>
        <div>Room Number</div>
        <div>Adult Capacity</div>
        <div>Child Capacity</div>
        <div>Price $</div>
        </div>

        <div>
           {data.map((data,index)=>{
                return(
                   <Tabledetails setDeleteid={setDeleteid} setIsEdit={setIsEdit} data={data} key={index} setAddroom={setAddroom}/>
                )
            })} 
        </div>

    </div>
            
    
    </div>
  )
}

export default Table