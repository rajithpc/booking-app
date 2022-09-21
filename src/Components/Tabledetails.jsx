import React from 'react'
import "../Components/Tabledetails.css";
const Tabledetails = ({data}) => {
  return (
    <div className='details'>
        <div className='roomno'><label>{data.Roomno}</label></div>
        <div className='adcapacity'><label>{data.ADcapacity}</label></div>
        <div className='cdcapacity'><label>{data.cdcapacity}</label></div>
        <div className='price'><label>{data.price}</label></div>
    </div>
  )
}

export default Tabledetails