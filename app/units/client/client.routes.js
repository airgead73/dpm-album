const { Router } = require('express');
const clientRouter = Router();

// controllers
const { home } = require('./client.controller');

// routers
clientRouter.route('/').get(home);

module.exports = clientRouter;