var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(req, res)
{
	fs.readFile('socket.io.chat/HTMLPage.htm', function(error, data)
	{
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});

}).listen(process.env.PORT, function()
{
	console.log('server running....');
});

var io = socketio.listen(server);

io.sockets.on('connection', function(socket)
{
	socket.on('message', function(data)
	{
		console.log('receive message: ' + data);

		io.sockets.emit('message', data);
	});
});
