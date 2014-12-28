//var confType='{"id":"group1","fields":[],"widgetContainer":[{"id":"pxFormField"}]}';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pxFormGroupSchema = new Schema({
  title: String,
  skin: String,
  fields: [{type: Schema.ObjectId,
  	ref: 'pxWidFormField'}]
})

mongoose.model('pxFormGroup', pxFormGroupSchema);