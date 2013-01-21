var connect = require("connect");

connect.createServer(function(request, response, next)
{
    console.log('first function');
    
    next();
},function(request, response, next)
{
    console.log('second function');
    
    next();
},function(request, response, next)
{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello Connect Mobile...!</h1>');
}).listen(process.env.PORT, function()
{
    console.log('server running...');
});