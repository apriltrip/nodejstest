var http = require("http");

var server = http.createServer(function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello Web Server with Node.js  - by apriltrip</h1>');
});

server.listen(process.env.PORT, function()
{
    console.log('Server Running');
}
);

