const mongoose = require('mongoose');
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
require('dotenv/config');

const URI =
  'mongodb+srv://mohitsinghnegi1:dbUserPassword@cluster0-nj1kh.mongodb.net/ChatMate?retryWrites=true&w=majority';
const connectDB = async () => {
  await mongoose
    .connect(URI, {
      dbName: 'ChatMate',
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('connection with mongodb is established');
    })
    .catch((e) => {
      console.error('error while connecting with mongodb atlas ', e);
    });
};

module.exports = connectDB;
