var connect = require("connect");

// static 미들웨어를 사용하면 지정한 폴더에 있는 내용을 모두 웹 서버 루트 폴더에 올린다.
connect.createServer(connect.static(__dirname + '/Resources'), function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<img src = "/cat.jpg" width = "100%" />');
}).listen(process.env.PORT, function()
{
    console.log('server running...');
});