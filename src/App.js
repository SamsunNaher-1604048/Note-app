import { useEffect, useState } from "react";
import NoteList from "./component/NoteList";
import{nanoid} from 'nanoid'
import Scarch from "./component/Scarch";


const App=()=>{
const [notes,Setnotes]=useState([{
  id:nanoid(),
  text:"this is frist app",
  date:"13.89.09"
}])

const [Searchtext, SetSearchtext]=useState('')



useEffect(()=>{
  localStorage.setItem("notes-item",JSON.stringify(notes));
},[notes])

useEffect(()=>{
  const savednote=JSON.parse(localStorage.getItem("notes-item"))
  Setnotes(savednote)
  console.log(savednote)
},[])


  const addnote=(text)=>{
   const date =new Date();
   const Newnote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
   }
   const Newnotes=[...notes,Newnote]
   Setnotes(Newnotes)

  }


  const Deletedata=(id)=>{
   const newNotes = notes.filter((note)=>note.id!==id)
   Setnotes(newNotes)
  }


  const TextSearch=(text)=>{
      SetSearchtext(text)
  }

  return(

    <div className="container">
    <h1>Notes</h1>
     <Scarch TextSearch={TextSearch}/>
     <NoteList notes={notes.filter((note)=>note.text.toLowerCase().includes(Searchtext))} HandleText={addnote} Deletedata={Deletedata}/>
    </div>
  )
}
export default App;
