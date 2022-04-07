const asyncHandler = require('express-async-handler');
const work = require('../works/work');
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
    .render('pages/photoDashboard', {
      success: true,
      title: 'photos',
      main: 'main--photos',
      auth_nav: true 
    }); 

});

exports.photoAdd = asyncHandler(async (req, res, next) => { 

  const works = await Work.find().sort();
  let work_title;

  if(req.query.work) {
    const work = await works.find(item => item.id === req.query.work);
    work_title = work.title;
  } else {
    work_title = '';
  }
  
  return res
    .status(202)
    .render('pages/photoAdd', {
      success: true,
      title: 'add photo',
      main: 'main--photo-add',
      auth_nav: true,
      work_title,
      works 
    }); 

});

exports.photoDetail = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .render('pages/photoDetail', {
      success: true,
      title: 'photo detail',
      main: 'main--photo-detail',
      auth_nav: true 
    }); 

});

exports.photoUpdate = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .render('pages/photoUpdate', {
      success: true,
      title: 'photo update',
      main: 'main--photo-update',
      auth_nav: true 
    }); 

});

exports.workAdd = asyncHandler(async (req, res, next) => {

  const { sort } = req.query;
  let currentSort = sort || '-title'

  const works = await Work.find().sort(currentSort);

  return res
    .status(202)
    .render('pages/workAdd', {
      success: true,
      title: 'add work',
      main: 'main--work-add',
      auth_nav: true,
      works 
    }); 

});

exports.workDashboard = asyncHandler(async (req, res, next) => { 

  const works = await Work.find().sort('title');

  return res
    .status(202)
    .render('pages/workDashboard', {
      success: true,
      title: 'works',
      main: 'main--work',
      auth_nav: true,
      works 
    }); 

});

exports.workUpdate = asyncHandler(async (req, res, next) => { 

  return res
    .status(202)
    .render('pages/workUpdate', {
      success: true,
      title: 'work update',
      main: 'main--work-update',
      auth_nav: true 
    }); 

});

exports.workDetail = asyncHandler(async (req, res, next) => { 

  const work = await Work.findById(req.params.id);

  return res
    .status(202)
    .render('pages/workDetail', {
      success: true,
      title: work.title,
      main: 'main--work-detail',
      auth_nav: true,
      work,
      photos: [] 
    }); 

});