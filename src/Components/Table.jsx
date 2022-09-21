import React from 'react'
import Tabledetails from './Tabledetails'
import './Table.css'

const Table = ({data,senddata}) => {
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
                   <Tabledetails data={data} key={index}/>
                )
            })} 
        </div>

    </div>
            
    
    </div>
  )
}

export default Table