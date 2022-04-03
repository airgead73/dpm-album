const { connectDB } = require('./config.db');
const { authConfig } = require('./config.auth');

module.exports = {
  connectDB,
  authConfig
}