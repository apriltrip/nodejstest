var http = require("http");
var fs = require("fs");
//var url = require("url");

http.createServer(function(req, res) 
{
    if (req.method == 'GET')
    {
        fs.readFile('request_test/HTMLPage.htm', function(error, data)
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
//        console.log('GET request');
        
//        var query = url.parse(req.url, true).query;
//        
//        res.writeHead(200, {'Content-Type': 'text/html'});
//        res.end('<h1>' + JSON.stringify(query) + '</h1>');
    }
    else if (req.method == 'POST')
    {
//        console.log('POST request');
        
        req.on('data', function(data)
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>' + data + '</h1>');
        });
    }
//    var pathname = url.parse(req.url).pathname;
//    
//    if (pathname == '/')
//    {
//        fs.readFile('request_test/Index.htm', function(error, data)
//        {
//            res.writeHead(200, {'Content-Type': 'text/html'});
//            res.end(data);
//        });
//    }
//    else if (pathname == '/OtherPage')
//    {
//        fs.readFile('request_test/OtherPage.htm', function(error, data)
//        {
//            res.writeHead(200, {'Content-Type': 'text/html'});
//            res.end(data);
//        });
//    }

}).listen(process.env.PORT, function()
{
    console.log('Server is running.');
});