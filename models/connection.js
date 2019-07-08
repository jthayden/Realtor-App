//Import the mongoose module
const mongoose = require('mongoose');

//Step 1
const connectionString = process.env.MONGODB_URI || "mongodb://localhost/agentportfolios";


//Step 2
//Open up a connection to the mongo database.
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


//Step 3
//Export the mongoose object.
module.exports = mongoose
