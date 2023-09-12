require("dotenv").config();
require("./mongo.js");
const express = require("express");
const app = express();
const cors = require("cors");
const Note = require("./models/Note.js");
const notFound = require("./middleware/notfound.js");
const handleErrors = require("./middleware/handleErrors.js");


app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/api/notes", (request, response) => {
  Note.find({}).then( notes =>
    response.json(notes)
  );
});

app.get("/api/notes/:id", (request, response, next) => {
  const id = request.params.id;

  Note.findById(id).then(note => {
    if (note) {
      response.json(note);
    } else {
      response.status(404).send("Note not found 😞 ").end();
    }
  }).catch(err => {
    next(err);
  });
});

app.delete("/api/notes/:id", (request, response, next) => {
  const {id} = request.params;

  Note.findByIdAndDelete(id).then(() => {
    response.status(204).end();
  }).catch( error => next(error));
});

app.post("/api/notes",(request, response) => {
  const note = request.body;

  if(!note || !note.body){
    return response.status(400).json({
      error: "note.body is missing"
    });
  }
  
  const newNote = new Note({
    title: note.title,
    body: note.body
  });

  newNote.save().then( savedNote => {
    response.status(201).json(savedNote);
  });
});

app.put("/api/notes/:id", (request,response) => {
  const {id} = request.params;
  const note = request.body;

  const newNoteInfo = {
    body: note.body
  };

  Note.findByIdAndUpdate(id, newNoteInfo, {new: true}).
    then(result => {
      response.json(result);
    });

});

app.use(handleErrors);

app.use(notFound);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
