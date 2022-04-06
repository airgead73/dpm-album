const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  format: { type: String, required: [true, 'Please, add a format value.[db]'] },
  height: { type: Number },
  material: { type: String, required: [true, 'Please, add material value.[db]'] },
  original_filename: { type: String, required: [true, 'Please, add material value.[db]'] },
  public_id: { type: String, required: [true, 'Please, add public id value. [db]'] },
  title: { type: String, required: [true, 'Please, add public id value. [db]'] },
  url: { type: String, required: [true, 'Please, add public id value. [db]'] },
  width: { type: Number }
}, 
  {timestamps: true}
);

shiftSchema.set('toObject', {virtuals: true});
shiftSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Photo', photoSchema);