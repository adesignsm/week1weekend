//STREAMING
/*var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");*/

//GETTING DATA CUNKS FROM WEB SERVER
/*
var https = require("https");
console.log("https import success");

var options = {

	host: "www.google.com",
	path: "/"
}

var callback = function(response) {

	console.log("In response handler callback");

	response.on("data", function(chunk) {

		console.log("[-- CHUNK OF LENGTH: " + chunk.length + " --]");
		console.log(chunk.toString());
	});
}

console.log("I am about to make a request");

https.request(options, callback).end();
console.log("I have made the request");*/