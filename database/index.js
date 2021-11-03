const mongoURI = require('mongodb-uri');
const mongoose = require('mongoose');
const ConfigConstants = require('../constants/config.constants');

async function connectToDatabase() {
  try {
    const uri = ConfigConstants.MONGODB_URI;
    const db = await mongoose.connect(mongoURI.formatMongoose(uri), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Successfully connected to MongoDB ', db.connection.name);
    return db;
  } catch(e) {
    throw e;
  }
}

module.exports = {
  connectToDatabase
}