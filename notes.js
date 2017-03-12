/*CONVERTING OBJ INTO STRINGS
var str = '{"Akash":1, "Jihye":2, "Bob":"Sam"}';
var obj = JSON.parse(str);

console.log("First: ", obj);

delete str.Akash;

JSON.stringify(obj);
console.log("Second ", obj);*/


/*FILE WRITING SYNCHRONOUS
var fs = require("fs");

var filePath = "synchro/test.txt";
var fileData = "TEST TEXT SYNCHRONOUS\n"

fs.writeFileSync(filePath, fileData);
console.log("Succesfuly edited file: ", filePath);*/

//FILE WRITING ASYNCHRONOUS
/*var fs = require("fs");

var filePath = "synchro/test-async.txt";
var fileData = "TEST TEXT ASYNCHRONOUS \n";

fs.writeFile(filePath, fileData, function(err) {

	if (err) {

		throw err;
	}

	console.log("Succesfuly edited file: ", filePath);
});*/