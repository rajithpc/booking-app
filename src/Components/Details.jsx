import React from 'react'
import "./Details.css"
import Button from './Button'
const Details = ({data,btn_text}) => {
  return (
    <div className='d-body'>
        
          <div> 
            <label>{data.name}</label>
            <div><label>{data.date}</label> </div>
          </div>
          <div><label>{data.id}</label></div>
          <div><Button text={btn_text}/></div>
          
            
        
    </div>
   
  ) 
}

export default Details