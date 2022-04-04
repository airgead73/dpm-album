const { Router } = require('express');
const photoRouter = Router();

// controllers
const { create, read } = require('./photo.controller');

// routes
photoRouter.route('/').get(read).post(create);

module.exports = photoRouter;