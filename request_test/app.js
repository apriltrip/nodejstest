var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req, res) 
{
    var pathname = url.parse(req.url).pathname;
    
    if (pathname == '/')
    {
        fs.readFile('request_test/Index.htm', function(error, data)
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if (pathname == '/OtherPage')
    {
        fs.readFile('request_test/OtherPage.htm', function(error, data)
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
}).listen(process.env.PORT, function()
{
    console.log('Server is running.');
});