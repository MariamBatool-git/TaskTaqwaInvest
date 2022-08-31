
// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function listDatabases(){
    //databasesList = await mongoose.db().admin().listDatabases();
 
    console.log("Databases:");
    //databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function dbConnect() {
    const DB_URL = "mongodb+srv://MariamBatool:mary5376854@cluster0.3mc9aw2.mongodb.net/authDB?retryWrites=true&w=majority";
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  await mongoose
    .connect(
        process.env.DB_URL || DB_URL,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
    await listDatabases();
}

module.exports = dbConnect;

