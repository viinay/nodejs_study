var fs  = require("fs");
#readFile with utf-8 format
fs.readFile("file2.txt","utf-8",function(err,data){
	if(err){
		console.error(err);
	}else{
		console.log(data);
	}
})
console.log(".end");

#readFile Syncly with utf-8 format
var data = fs.readFileSync("file2.txt","utf-8");
console.log(data);
console.log(".end");
