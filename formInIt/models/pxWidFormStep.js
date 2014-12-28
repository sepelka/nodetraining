var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pxFormStepSchema = new Schema({
  id: String,
  title: String,
  description: String,
  skin: String,
  Groups: [{type: Schema.ObjectId,
  	ref: 'pxWidFormGroup'}]
});

module.exports = mongoose.model('pxFormStep', pxFormStepSchema);