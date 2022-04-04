const asyncHandler = require('express-async-handler');
const { cloudinary } = require('../../config');

/**
 * @desc Create a photo
 * @route POST - /api/photos
 * @access Private 
 * */

exports.create = asyncHandler(async (req, res, next) => {

  const fileStr = req.body.data;
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
  })
  
  return res.status(200).json({ photo: uploadedResponse});

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