var connect = require("connect");

connect.createServer(function(request, response)
{
    // 예외 강제 발생
    throw new Error('Page Not Found');
}, connect.errorHandler(
{
    stack: true,
    message: true,
    dump: true
})).listen(process.env.PORT, function()
{
    console.log('server running...');
});