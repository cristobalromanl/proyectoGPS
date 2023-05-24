const mongoose = require('mongoose');

const db_connection = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB✅');
  } catch (error) {
    console.log(error);
  }
}

module.exports = db_connection;