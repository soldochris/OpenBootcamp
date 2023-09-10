const mongoose = require("mongoose");


const connectionString = process.env.MONGO_DB_URI;

mongoose.connect(connectionString)
  .then(() => {
    console.log("Database connected");
  })
  .catch( err => {
    console.log(err);
  });


// const note = new Note({
//   title: "mongo db is incredible",
//   body: "I'm learning to use mongo db with mongoose"
// });

// note.save()
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch( err => {
//     console.error(err);
//   });