var http = require("http");

var options = {
  hostname: 'www.lewei50.com',
  path: '/api/V1/sensor/GetHistoryData/4973',
  method: 'GET',
  headers: {
	'userkey': '5aa6452c3c424eec87def1326cac0f4c'
  }
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});


req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.end();
