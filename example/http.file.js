var fs = require("fs");
var http = require("http");

http.createServer(function(req, res) 
{
//    fs.readFile('LighthouseSample.jpg', function(error, data)
//    {
//        res.writeHead(200, {'Content-Type': 'image/jpeg'});
//        res.end(data);
//    });

    fs.readFile('Maid with the Flaxen Hair.mp3', function(error, data)
    {
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        res.end(data);
    });
}).listen(process.env.PORT, function()
{
    console.log("Server Running at %s:%d", process.env.IP, process.env.PORT);
});