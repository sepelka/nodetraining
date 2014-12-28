var express = require('express');
var mongoose = require('mongoose');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
mongoose.connect("mongodb://dogen.mongohq.com:10065/pressxine", function (err, res){
  if(err) console.log('error: Cconnecting to db: '+ err);
  else console.log('Connection ready');

});

//load all models in models file
fs.readdirSync(__dirname + '/models').forEach(function (filename){
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename);
});

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
//app.use(express.urlencodxed());

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.post('/pxField', function (req, res) {
    var myField = require('./FormInIt.js');
    var values="";
    // var text=req.body.id+"</ br>";
    // text=text+req.body.title+"</ br>";
    //var text=text+req.body.placeholder+"</ br>";
    // text=text+req.body.type+"</ br>";
    //text=text+req.body.required+"</ br>";
    //text=text+req.body.fsize+"</ br>";
    //text=text+req.body.defValue+"</ br>";
    if (req.body.type=="List"){
      values=' ,"values1":["'+req.body.values.replace(/\r\n/g, '","')+'"]';}
      var txtField='{"id":"'+req.body.id+'", "title":"'+req.body.title+'", "placeholder":"'+req.body.placeholder+'", "type":"'+req.body.type+'", "required":'+req.body.required+', "fSize":"'+req.body.fSize+'", "defValue":"'+req.body.defValue+'"'+values+'}';
    var obj = JSON.parse('{"id":"title", "title":"Titles", "placeholder":"Title", "type":"name", "required":true, "fSize":"35"}');
     //res.send(txtField);
    var obj = JSON.parse(txtField);
    //var test= myField.getForm(obj);

    res.send(myField.getField(obj));
});

app.get('/pxWidget/:id', function (req, res) {
    var myWidget = require('./pxWidget.js');
    var values="";
    var widId="FiiField";

    if (req.params.id!=null)
      widId=req.params.id;
    myWidget.Widget(widId);
    res.send(myWidget.Widget("FiiField"));
});

app.get('/pxWidget', function (req, res) {
    var myWidget = require('./pxWidget.js');
    var values="";
    var widId="FiiField";

    if (req.params.id!=null)
      widId=req.params.id;
    //myWidget.Widget(widId);
    res.send(myWidget.Widget("FiiField"));
});


app.get('/showForms', function (req, res) {
  mongoose.model('pxWidForms').find(function(err, forms){
    res.send(forms);
  });});

app.get('/setWidget/:type', function (req,res) {

  if (req.params.type) {
  switch(req.params.type) {
    case "pxWidForm":
    break; 
    case "pxWidFormStep":
    break; 
    case "pxWidFormGroup":
    break; 
    case "pxWidFormField":
    break; 
  }}
});

app.get('/showForm/:id', function (req, res) {
  mongoose.model('pxWidForms').find({id: req.params.id}, function(err, form){
    res.send(form);
  });
  /*mongoose.model('pxWidForms').find({id: req.params.id}, function(err, form){
    mongoose.model('pxWidForms').populate(form, {path: 'steps'}, function(err, form){
      res.send(form);
    })
  })*/ 
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
});