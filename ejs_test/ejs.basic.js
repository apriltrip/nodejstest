var http = require("http");
var fs = require("fs");
var ejs = require("ejs");

http.createServer(function(req, res)
{
	fs.readFile('ejs_test/EJSPage.ejs', 'utf8', function(error, data)
	{
		res.writeHead(200, {'Content-Type': 'text/html'});
            	res.end(ejs.render(data));
	});
}).listen(process.env.PORT, function()
{
	console.log('Server is running.');
});