const { Router } = require('express');
const workRouter = Router();

// controllers
const { create, read, detail, update, remove } = require('./work.controller');

// routes
workRouter.route('/').get(read).post(create);
workRouter.route('/:id').get(detail).put(update).delete(remove);

module.exports = workRouter;