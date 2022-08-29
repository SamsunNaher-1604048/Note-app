import React, { useState } from 'react'

const Addnote = ({HandleText}) => {
    const[notetext,Setnotetext]=useState('')
    const TestLimit=200;

    const Handelchange=(e)=>{
      if(e.target.value.length<=200)
        {
          Setnotetext(e.target.value);
        }
    }

    const Handlesave=()=>{
        if(notetext!==''){
            HandleText(notetext)
            Setnotetext('')
        }
    }

  return (
    <div className='note new'>
        <textarea rows="8" cols='10'placeholder='type to add a note...' onChange={Handelchange} value={notetext}>
        </textarea>
        <div className='footer'>
            <small>{TestLimit-notetext.length} remaining</small>
            <button className='save' onClick={Handlesave}>Save</button>
        </div>
    </div>
  )
}

export default Addnote
