var connect = require("connect");

var connect = require("connect");

//var server = connect.createServer();
//var server = connect();

connect()
    .use(connect.cookieParser())
    .use(connect.session(
    { 
        secret: 'keyboard cat', 
        key: 'sid', 
        cookie: 
        { 
            maxAge: 60000
        }
    }))
    .use(function(request, response, next)
    {
        var sess = request.session;
        if (sess.views)
        {
            response.writeHead(200, {'Content-Type': 'text/html'});    
            response.write('<p>views: ' + sess.views + '</p>');
            response.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
            response.end();

            sess.views++;
        }
        else
        {
            sess.views = 1;
            response.end('welcome to the session demo. refresh!');
        }
        
    }).listen(process.env.PORT, function()
    {
        console.log('server running...');
    });
