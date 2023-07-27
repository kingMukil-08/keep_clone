import './App.css';
import Home from './components/home';
import Draw from './components/draw';
import Notes from './components/notes';
import Remember from './components/remember';
import Archive from './components/archive';
import Edit from './components/edit';
import Trash from './components/trash';
import Note from './cmp/note';
import "../src/cmp/style.css"
import { useState } from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  const [id,setid]=useState(0)
  
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    newNote.id=id;
    setNotes((prevValue) => {
      return [...prevValue, newNote]
    })
    setid(id+1)
  }
  //archive
  const [archivenote,setarchive]=useState([]);


  function addarchive(notearchive)
  {
    notearchive.id=id
    setarchive(prevValue=>{
      return[...prevValue,notearchive]
    })
    setid(id+1)
  }

  function deletearchive(id){
    setarchive(prevValue => {
      return [...prevValue.filter((note)=>
        note.id !== id)]
    })
  }


  function deleteNote(id){
    setNotes(prevValue => {
      return [...prevValue.filter((note)=>
        note.id !== id)]
    })
  }
    
  return (
    <div>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="remember" element={<Remember/>}/>
     <Route path="notes" element={<Notes/>}/>
     <Route path="edit" element={<Edit/>}/>
     <Route path="/archive" element={<Archive value={archivenote} onDelete={deletearchive}/>}/>
     <Route path="trash" element={<Trash/>}/>
     <Route path="draw" element={<Draw/>}/>
    </Routes>
    
    <div>
      <Note value={notes} onDelete={deleteNote} onAdd={addNote} onArchiveAdd={addarchive}/>
    <disp/>
    </div>

      </div>
  )
  }
export default App;
