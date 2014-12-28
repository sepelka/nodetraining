var confType='{"id":"group1","fields":[],"widgetContainer":[{"id":"pxFormField"}]}';
//var mongoose = require('pxWidFormStep');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pxFormSchema = new Schema({
  title: String,
  skin: String,
  steps: [{type: Schema.ObjectId,
  	ref: 'pxWidFormStep'}]
});

mongoose.model('pxForm', pxFormSchema);
