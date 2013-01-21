var connect = require("connect");

connect.createServer(connect.query(), function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>' + JSON.stringify(request.query) + '</h1>');
}).listen(process.env.PORT, function()
{
    console.log('server running...');
});