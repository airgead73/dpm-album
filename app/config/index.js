const { authConfig } = require('./config.auth');
const { connectDB } = require('./config.db');
const { limiter, sessionConfig } = require('./config.session');
const { policies: helmetPolicies } = require('./config.helmet');
const { cloudinary } = require('./config.cloudinary');

module.exports = {
  authConfig,
  cloudinary,
  connectDB,
  helmetPolicies,
  limiter,
  sessionConfig  
}