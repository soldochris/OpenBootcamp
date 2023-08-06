import "./App.css";
import { Note } from "./Note.js";
import { useState } from "react";

const App = (props) => {
  const [notes,setNotes]= useState(props.notes);
  const [newNote,setNewNote] = useState('');
  const [showAll,setShowAll] = useState(true);

  const handleChange =( event ) => {
    setNewNote(event.target.value);
  }
  
  const handleSubmit = ( event) =>{
    event.preventDefault();

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(noteToAddToState));
    setNewNote("");
  }

  const handleShowAll = () =>{
    setShowAll(()=> !showAll);
  }

  return (
    <section>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? 'show only important' : 'show all'}</button>
      <ul>
        {notes.filter( (note) => {
          if(showAll=== true) return true;
          return note.important === true;
        }
    
        )
        .map((note) => {
          return (
            <li key={note.id}>
              <Note {...note} />
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Create note</button>
      </form>
    </section>
  );
};

export default App;
