var http = require('http');   
	    server = http.createServer(function (req, res) {   
		            res.writeHeader(200, {"Content-Type": "text/plain"});   
					          res.end("Hell1111111111111111111\n");   
							      })   
    server.listen(8000);   
	    console.log("httpd start @8000");   

/*
//event.js
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
console.log('some_event occured.');
});
setTimeout(function() {
event.emit('some_event');
}, 1000);
*/
