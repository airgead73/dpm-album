const { Router } = require('express');
const appRouter = Router();
const { clientRouter } = require('./units/client');

appRouter.use('/', clientRouter);

module.exports = appRouter;