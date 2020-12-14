var http = require('http');

var server = http.createServer();

var port = '3003';
server.listen(port, function(){
    console.log('server started.. : %d',port);
});