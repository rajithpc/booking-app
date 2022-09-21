import React from 'react'

const Input = ({text,setState,n}) => {
  return (
    <div className='imputcmp'>
        <form>
            <div><label>{text}</label></div>
            <div className='input'><input type={n} onChange={(c)=>{setState(c.target.value)}} required></input></div>
        </form>
        
    </div>
  )
}

export default Input