var http =require("http");

http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<br/><h1>Node.js</h1>');
	res.end("<p>Hello World!</p>");
}).listen(4000);
console.log("Http server is listen at port 4000 .");
console.log("node http server");
console.log("node http server 2");