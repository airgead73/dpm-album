const mongoose = require('mongoose');
const { mongoUri } = require('./env');

const connectDB = async () => {
  try {

    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${conn.connection.host}.`);

  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = {
  connectDB
};