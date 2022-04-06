const asyncHandler = require('express-async-handler');
const { cloudinary } = require('../../config');

/**
 * @desc Create a photo
 * @route POST - /api/photos
 * @access Private 
 * */

exports.create = asyncHandler(async (req, res, next) => { 

  
  return res
    .status(200)
    .json({ 
      success: true, 
      photo: res.compiledData
    });

});

/**
 * @desc Read photos
 * @route GET - /api/photos
 * @access Private 
 * */

exports.read = asyncHandler(async (req, res, next) => {

  const { resources } = await cloudinary.search.expression('folder:dev_setup')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();
  
   const publicIds = resources.map( file => file.public_id);
   
   return res.status(200).json({ ids: publicIds})

});

exports.upload = asyncHandler(async (req, res, next) => {

  console.log('upload executed')

  const fileStr = req.body.url;
  const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: 'dev_setup',
    eager: [
      {width: 300, height: 300, crop: 'fill'},
      {
        color: '#ffffff',
        gravity: 'south_east',
        overlay: {
          font_family: 'Roboto',
          font_size: 10,
          text: '%C2%A9%20Brian%20Moneypenny'
        },
        x: 8,
        y: 8
      }      
    ]
  });

  res.cloudData = uploadedResponse;

  next();  
    
});

exports.compileData = asyncHandler(async (req, res, next) => {

  const { secure_url, width, height, format, public_id } = res.cloudData;
  const { work, title, mode, material } = req.body;

  res.compiledData = {
    format,
    height,
    material,
    mode,
    public_id,
    title,
    url: secure_url,
    width,
    work      
  }

  next();

});