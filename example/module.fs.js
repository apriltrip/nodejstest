var fs = require('fs');

//try
//{
//    var text = fs.readFileSync('example/textfile.txt', 'utf8');
//    //var text = fs.readFileSync('textfile.txt', 'utf8');
//    console.log(text);
//}
//catch (e)
//{
//    console .log(e);
//}

fs.readFile('example/textfile.txt', 'utf8', function(err, data)
//fs.readFile('textfile.txt', 'utf8', function(err, data) 
{
    if (err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
});
