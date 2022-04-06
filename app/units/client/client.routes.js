const { Router } = require('express');
const clientRouter = Router();

// controllers
const { 
  home, 
  photoDashboard, photoDetail, photoAdd, photoUpdate, 
  workDashboard, workDetail, workAdd, workUpdate 
} = require('./client.controller');

// routes
clientRouter.route('/').get(home);

clientRouter.route('/photos').get(photoDashboard);
clientRouter.route('/photos/add').get(photoAdd);
clientRouter.route('/photos/:id').get(photoDetail);
clientRouter.route('/photos/:id/update').get(photoUpdate);

clientRouter.route('/works').get(workDashboard);
clientRouter.route('/works/add').get(workAdd);
clientRouter.route('/works/:id').get(workDetail);
clientRouter.route('/works/:id/update').get(workUpdate);

module.exports = clientRouter;