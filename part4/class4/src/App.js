import "./App.css";
import { Note } from "./Note.js";
import { useEffect,useState } from "react";

import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading,setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const {data} = response;
        setNotes(data);
        setLoading(false);
      });
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

    axios
      .post('https://jsonplaceholder.typicode.com/posts/', noteToAddToState )
      .then( response => {
        const {data} = response;
        setNotes(notes.concat(data));
        console.log(notes);
      });

    //setNotes(notes.concat(noteToAddToState));
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
