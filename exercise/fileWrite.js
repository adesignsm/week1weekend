var fs = require("fs");
var args = process.argv;

var input = args[2];

var filePath = input;
var fileData = "NICE \n";

fs.writeFile(filePath, fileData, function(err) {

	if (err) {

		throw error
		console.log(err);
	}

	console.log("Succesfuly edited: ", filePath);
});