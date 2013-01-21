var connect = require("connect");

var server = connect.createServer();

server.use(connect.logger());

server.use(function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello Connect Mobile...!</h1>');
});

server.use(connect.errorHandler(
{
    stack: true,
    message: true,
    dump: true
}));

server.listen(process.env.PORT, function()
{
    console.log('server running...');
});