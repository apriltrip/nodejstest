var http = require("http");

http.createServer(function(req, res) 
{
    // get cookie
    var cookie = req.headers.cookie;
    
    cookie = cookie.split(';').map(function(element)
    {
        var elementData = element.split('=');
        
        return {key: elementData[0],
                value: elementData[1]};
    });
    
    // set cookie
    res.writeHead(200, 
                  {'Content-Type': 'text/html',
                   'Set-Cookie': 
                   ['name = apriltrip', 
                    'region = seoul']
                  });
                  
    res.end('<h1>' + JSON.stringify(cookie) + '</h1>');

//    var date = new Date();
//    date.setDate(date.getDate() + 7);
//    
//    
//    res.writeHead(200, 
//                  {'Content-Type': 'text/html',
//                   'Set-Cookie': 
//                   ['breakfast = toast; Expires = ' + date.toUTCString(), 
//                    'dinner = chicken']
//                  });
//                  
//    res.end('<h1>' + req.headers.cookie + '</h1>');
}).listen(process.env.PORT, function()
{
    console.log('Server Running');
});