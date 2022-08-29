import React from 'react'
import Addnote from './Addnote'
import Note from './Note'

const NoteList = ({notes,HandleText,Deletedata}) => {
  return (
    <div className='notelist'>
     {notes.map((note)=>(

          <Note id={note.id} text={note.text} date={note.date} Deletedata={Deletedata}/>
     ))}
     <Addnote HandleText={HandleText}/>
    </div>
  )
}

export default NoteList
