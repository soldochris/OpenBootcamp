import "./App.css";
import { Note } from "./Note.js";
import { useEffect,useState } from "react";
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNote } from "./services/notes/createNotes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading,setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getAllNotes()
      .then( notes => {
        setNotes(notes);
        setLoading(false);
      })
    }, 1000);
  },[]);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    createNote(noteToAddToState).then((newNote) => {
      setNotes((notes) => notes.concat(newNote));
    });

    setNewNote("");
  };

  return (
    <main >
      <h1>Notes</h1>
      {
        loading ? <div className="lds-circle"><div></div></div> : '' 
      }
      <ul className="list-notes">
        {notes
          .map((note) => {
            return (
              <li key={note.id}>
                <Note {...note} />
              </li>
            );
          })}
      </ul>
      <form onSubmit={handleSubmit} className="new-note">
        <input type="text" onChange={handleChange} value={newNote} placeholder="New note..."/>
        <button>Create note</button>
      </form>
    </main>
  );
};

export default App;
