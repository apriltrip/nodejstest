var custom = new process.EventEmitter();

custom.on('tick', function()
{
    console.log('이벤트 실행');
}
);

custom.emit('tick');

//process.on('exit', function()
//{
//    console.log('안녕히 계세요.');
//});
//
//process.exit();
//
//process.emit('exit');
//process.emit('exit');
//process.emit('exit');
//process.emit('exit');
//
//console.log('프로그램 실행중...');

//var onUncaughtException = function(error)
//{
//    console.log("예외 발생");
//    
//    //process.removeListener('uncaughtException', onUncaughtException);
//};
//
////process.on('uncaughtException', onUncaughtException);
//process.once('uncaughtException', onUncaughtException);
//
//setInterval(function()
//{
//    error.error.error('^_^');
//}, 2000);

//process.on('exit', function()
//{
//   console.log("안녕히 가거라.") ;
//});
//
//process.on('uncaughtException', function(error)
//{
//    console.log('예외 발생');
//});
//
//// 2초 간격으로 3번 예외 발생
//var count = 0;
//var id = setInterval(function()
//{
//    count++;
//    
//    if (count == 3)
//    {
//        clearInterval(id);
//    }
//    
//    // 예외 강제 발생
//    error.error.error();
//}, 2000);