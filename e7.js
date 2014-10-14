var http = require("http");
var https = require("https");
var url = process.argv[2];

var options = {
  hostname: url,
  port: 80,
  //path: '/us/personal/',
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  var pageData='';
  res.on('data', function (chunk) {
    pageData=pageData+chunk;
  });
  res.on('end', function (chunk) {
    console.log(pageData+"\n"+pageData.length);
  });
});

// write data to request body
//req.write('data\n');
req.write('data\n');
//req.end();