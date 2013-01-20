var fs = require("fs");
var http = require("http");

http.createServer(function(req, res) 
{
    fs.readFile('example/HTMLPage.htm', function(error, data)
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });    
}).listen(process.env.PORT, function()
{
    console.log('Server Running.');
}
);

