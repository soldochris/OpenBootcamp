require("dotenv").config();
require("./mongo.js");
const express = require("express");
const app = express();
const cors = require("cors");
const Note = require("./models/Note.js");
const notFound = require("./middleware/notfound.js");
const handleErrors = require("./middleware/handleErrors.js");
const Sentry = require("@sentry/node");
const { ProfilingIntegration } = require("@sentry/profiling-node");


app.use(cors());
app.use(express.json());


Sentry.init({
  dsn: "https://a3ea0420c744fcf55ed7f2c981db2e57@o4505875725221888.ingest.sentry.io/4505875732692992",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    new ProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
});

app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

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

app.put("/api/notes/:id", (request,response,next) => {
  const {id} = request.params;
  const note = request.body;

  const newNoteInfo = {
    body: note.body
  };

  Note.findByIdAndUpdate(id, newNoteInfo, {new: true}).
    then(result => {
      response.json(result);
    }).catch( error => next(error));
});

app.use(handleErrors);

// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

app.use(notFound);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
