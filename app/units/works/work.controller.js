const asyncHandler = require('express-async-handler');
const Work = require('./work');

/**
 * @desc Create a work
 * @route POST - /api/works
 * @access Private 
 * */

exports.create = asyncHandler(async (req, res, next) => {

  const work = new Work(req.body);

  await work.save();

  return res
    .status(200)
    .json({
      success: true,
      work
    });

});

/**
 * @desc Read works
 * @route GET - /api/works
 * @access Private 
 * */

 exports.read = asyncHandler(async (req, res, next) => {

  const works = await Work.find();

  return res
    .status(200)
    .json({
      success: true,
      works
    })

});

/**
 * @desc Read work detail
 * @route GET - /api/works/:id
 * @access Private 
 * */

 exports.detail = asyncHandler(async (req, res, next) => {

  const work = await Work.findById(req.params.id);

  return res
    .status(200)
    .json({
      success: true,
      work
    });

});

/**
 * @desc Update work
 * @route PUT - /api/works/:id
 * @access Private 
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  const work = await Work.findById(req.params.id);

  return res
    .status(200)
    .json({
      success: true,
      work
    });

});

/**
 * @desc Delete work
 * @route DELETE - /api/works/:id
 * @access Private 
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  const work = await Work.findById(req.params.id);

  work.remove();

  return res
    .status(200)
    .json({
      success: true,
      message: `${work.title}  has been deleted.`,
      work
    });

});