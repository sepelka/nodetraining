var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/myForms/:name', function(req, res) {
  res.type('application/json');
  var name = req.params.name;
  console.log("Parameter: " + name);
 
	employee = new Object();
	employee.name = name;
	employee.age = 25;
	employee.deparment = "HR";
	employee.wage = 15000.00;	
	
	address = new Object();
	address.city = "Massachusetts";
	address.state = "Springfield";
	address.street = "Evergreen";
	address.zip = 66450;
	
	employee.address = address;
	
	res.json(employee);
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})