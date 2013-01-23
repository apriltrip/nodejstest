var connect = require("connect");
var server = connect.createServer();

server.use(connect.cookieParser());

server.use('/SetCookie', function(request, response)
{
    response.writeHead(200, 
                        {
                            'Content-Type': 'text/html',
                            'Set-Cookie': ['breakfast = toast', 'dinner = lunch']
                        });
                        
    response.end('<a href = "/GetCookie"> GO TO GET COOKIE</a>');
});


server.use('/GetCookie', function(request, response)
{
    var output = JSON.stringify(request.cookies);
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>' + output + '</h1>');
});

    
server.listen(process.env.PORT, function()
{
    console.log('server running...');
});