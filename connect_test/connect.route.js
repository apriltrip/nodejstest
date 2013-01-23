var connect = require("connect");
var server = connect.createServer();

server.use('/Home/Index', function(request, response, next)
{
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1>Index Page</h1>');
        response.end();
});


server.use('/Home/About', function(request, response, next)
{
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1>About Page</h1>');
        response.end();
});

    
server.listen(process.env.PORT, function()
{
    console.log('server running...');
});
