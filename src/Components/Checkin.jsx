import React from 'react'

import './Checkin.css'
import Details from './Details'
const check = ({head,data,btn_text,img}) => {
  return (
    
      
    <div className='check'>
            <div className='box'>
               <div><svg xmlns="http://www.w3.org/2000/svg" fill='black' height='90px' width='30px' viewBox="0 0 512 512"><path d={img}/></svg></div> 
                <div className='head'>{head}</div>
            </div>
            <div className='scroll'>
             {data.map((data,index)=>{
              return(
               <Details data={data} key={index} btn_text={btn_text}/>
               
              )
           })} 
           <div></div>
           </div>
    </div>        
            
        
          
    
  )
}

export default check