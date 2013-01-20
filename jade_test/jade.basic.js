var http = require("http");
var fs = require("fs");
var jade = require("jade");

http.createServer(function(req, res)
{
    fs.readFile('jade_test/JadePage.jade', 'utf8', function(error, data)
	{
        var fn = jade.compile(data);
        
		res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(fn(
            {
                name: 'apriltrip',
                description: 'Hello Jade With Node.js'
            }));
	});
}).listen(process.env.PORT, function()
{
	console.log('Server is running.');
});