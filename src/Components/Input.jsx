import React from 'react'

const Input = ({value,text,setState,n}) => {
  return (
    <div className='imputcmp'>
        <form>
            <div><label>{text}</label></div>
            <div className='input'><input type={n} value={value} onChange={(c)=>{setState(c.target.value)}} required></input></div>
        </form>
        
    </div>
  )
}

export default Input