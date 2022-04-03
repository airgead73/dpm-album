const expressRateLimit = require('express-rate-limit');
const { rateLimit, sessionSecret, sessionExp } = require('./env');
const session = require('express-session');
const SessionMemory = require('memorystore')(session);

const sessionConfig = {
  secret: sessionSecret,
  resave: true,
  saveUninitialized: true,
  store: new SessionMemory({
    checkPeriod: sessionExp
  })

}

const limiter = expressRateLimit({
  windowMs: 10 * 60 * 10,
  max: rateLimit
});

module.exports = {
  limiter,
  sessionConfig
}