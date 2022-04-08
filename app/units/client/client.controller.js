const asyncHandler = require('express-async-handler');
const Work = require('../works/work');

/**
 * @desc home view
 * @route GET - /
 * @access Private / Public
 * */

exports.home = asyncHandler(async (req, res, next) => {

  const isAuthenticated = req.oidc.isAuthenticated();
  const options = {
    landing: {
      path: 'pages/landing',
      status: 401,
      success: false,
      main: 'main--landing',
      auth_nav: false
    },
    dashboard: {
      path: 'pages/dashboard',
      success: true,
      status: 202,
      success: true,
      main: 'main--dashboard',
      auth_nav: true
    }
  };

  const toggle = isAuthenticated ? 'dashboard' : 'landing';  

  return res
    .status(options[toggle].status)
    .render(options[toggle].path, {
      success: options[toggle].success,
      title: 'DPM Album',
      main: options[toggle].main,
      auth_nav: options[toggle].auth_nav 
    });

});

exports.photoDashboard = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .send('photo dashboard'); 

});

exports.photoAdd = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .send('photo add');

});

exports.photoDetail = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .send('photo detail');
 

});

exports.photoUpdate = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .send('photo update');

});

exports.workAdd = asyncHandler(async (req, res, next) => {

  return res
    .status(202)
    .send('work add');

});

exports.workDashboard = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .send('work dashboard'); 

});

exports.workUpdate = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .send('work update'); 

});

exports.workDetail = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .send('work detail');

});