var http = require("http");

http.createServer(function(req, res) 
{
    res.writeHead(302, {'Location' : 'http://www.naver.com'});
    res.end();
}).listen(process.env.PORT, function()
{
    console.log('Server Running.');
});