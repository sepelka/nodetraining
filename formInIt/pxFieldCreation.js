var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
//app.use(express.urlencoded());

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
    res.send('<form name="sepelkaform" id="sepelkaform" method="post" class="form-horizontal" role="form">'+myField.getField(obj)+'</form>');
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})