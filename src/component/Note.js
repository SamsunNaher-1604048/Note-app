import React from 'react'
import {AiFillDelete } from "react-icons/ai";

const Note = ({id,text,date,Deletedata}) => {

  const Delete=()=>{
    Deletedata(id)
  }
  
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='footer'>
        <small>{date}</small>
        <AiFillDelete  className='delete' size='1.3em' onClick={Delete}/>
      </div>
    </div>
  )
}

export default Note
