var connect = require("connect");
//var server = connect.createServer();
var server  = connect();

server.use(function(req, res)
{
    if (req.method == 'GET')
    {
        if (req.originalUrl == '/')
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Home Page</h1>');
            res.end();
        }
        else if (req.originalUrl == '/Test')
        {
            //res.end('Test from Connect!\n');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Test Page</h1>');
            res.end();
        }
        else if (req.originalUrl == '/About')
        {
            //res.end('About from Connect!\n');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>About Page</h1>');
            res.end();
        }
    }
    
});

//server.use('/', function(request, response, next)
//{
//    console.log(request.originalUrl);
//    
//    response.writeHead(200, {'Content-Type': 'text/html'});
//    response.write('<h1>Home Page</h1>');
//    response.end();
//});

//server.use('/Home/Index', function(request, response, next)
//server.use('/Index', function(request, response, next)
//{
//    console.log(request.originalUrl);
//    
//    response.writeHead(200, {'Content-Type': 'text/html'});
//    response.write('<h1>Index Page</h1>');
//    response.end();
//});


//server.use('/Home/About', function(request, response, next)
//server.use('/About', function(request, response, next)
//{
//    console.log(request.originalUrl);
//    
//    response.writeHead(200, {'Content-Type': 'text/html'});
//    response.write('<h1>About Page</h1>');
//    response.end();
//});

    
server.listen(process.env.PORT, function()
{
    console.log('server running...');
});
