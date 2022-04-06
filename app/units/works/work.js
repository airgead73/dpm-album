const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
  material: { type: String, required: [true, 'Please, add material value.[db]'] },
  mode: { type: String, required: [true, 'Please, add mode value. [db]'] },
  category: { type: String, required: [true, 'Please, add category value. [db]'] },
  title: { type: String, required: [true, 'Please, add title value. [db]'] },
}, 
  {timestamps: true}
);

workSchema.set('toObject', {virtuals: true});
workSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Work', workSchema);