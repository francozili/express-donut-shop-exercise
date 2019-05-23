
// requirements: import mongoose
const mongoose = require('mongoose');

// Connect to a local database called "the-donut-shop"
// When it connects, then console.log "Connected to MongoDB"
const connectionString = "mongodb://localhost/the-donut-shop";
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });
// export your mongoose connection
module.exports = mongoose;