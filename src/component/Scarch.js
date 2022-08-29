import React,{useState} from 'react'
import {AiOutlineSearch} from "react-icons/ai";

const Scarch = ({TextSearch}) => {
  const [Search,Setseaech]=useState('')


  const search=(e)=>{
     Setseaech(e.target.value)
     TextSearch(Search)
  }



  return (
    <div className='scarch'>
        <AiOutlineSearch className='search-icon'/>
        <input type='text' placeholder='Type here to search .....' onChange={search} value={Search}/>
    </div>
  )
}

export default Scarch
