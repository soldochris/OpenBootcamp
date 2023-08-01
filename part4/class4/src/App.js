import './App.css';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

const Note = ({id, content, date}) => {
  return (
    <div>
    <strong>{id}</strong>
    <p>{content}</p>
    <small><time>{date}</time></small>
  </div>
  )
}


function App() {
  if (typeof notes === 'undefined' || notes.length === 0 || notes === null){
    return (
      <div>
        <h1>No notes</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Hi to class 4</h1>
      <div>
        {notes.map( (note) => (
          <Note key={note.id} content={note.content} date={note.date}/>
        ))}
      </div>
    </div>
  );
}

export default App;
