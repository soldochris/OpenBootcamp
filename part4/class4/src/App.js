import "./App.css";
import { Note } from "./Note.js";
import { useEffect,useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>response.json())
      .then((json)=>{
        setNotes(json);
      })
  },[]);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    };
    setNotes(notes.concat(noteToAddToState));
    setNewNote("");
  };

  return (
    <section>
      <h1>Notes</h1>
      <ul>
        {notes
          .map((note) => {
            return (
              <li key={note.id}>
                <Note {...note} />
              </li>
            );
          })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Create note</button>
      </form>
    </section>
  );
};

export default App;
