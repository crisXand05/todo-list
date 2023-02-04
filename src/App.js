import { useEffect, useState } from "react";
import Note from './components/Note.js'
import {getAll, create} from './services/notes.js'

function App() {
  const [notes, setNotes] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const [note, setNote] = useState({
    content: '',
    important: false
  })
  useEffect(()=>{
     getAll().then(notes =>{
       setNotes(notes)
       setIsLoading(false)
     })
  },[])

const handleSubmit = (event)=>{
  event.preventDefault()
  create(note).then(res => setNotes([...notes, res]))
}

const handleChange = (event) =>{
  // setNote({
  //   ...note,
  //   [event.target.id]: event.target.value
  // })
  setNote({
    ...note,
    content: event.target.value
  })
}
const handleChangeCheck = (event) =>{
  setNote({
    ...note,
    important: event.target.checked
  })
  console.log(note)
}
  return (
    <div className="App">
      <h1>Notas</h1>
      {isloading ?
        <h2>Cargando ...</h2>:
        <ol>
          {notes.map(note =>(
            <Note key={note.id} content={note.content} important={note.important}/>
          ))}
        </ol>
      }
        <form onSubmit={handleSubmit}>
          <input type="text" id='content' value={note.content} onChange = {handleChange}/>
          <input type="checkbox" id='important' onChange = {handleChangeCheck}/>
          <button>Crear nota</button>
        </form>
    </div>
  );
}

export default App;
