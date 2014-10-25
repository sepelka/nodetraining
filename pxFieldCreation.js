var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
});
app.post('./pxField', function(request, response){

    console.log(request.body.id);
    console.log(request.body.title);
    console.log(request.body.placeholder);
    console.log(request.body.type);
    console.log(request.body.required);
    console.log(request.body.fsize);
    console.log(request.body.defValue);
    console.log(request.body.values);
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})