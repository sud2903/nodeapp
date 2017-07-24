var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end(data);
	});
}).listen(8080,'192.168.43.103');
console.log('server started');
	