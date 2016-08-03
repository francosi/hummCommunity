http = require('http');
var util=require('util');
var bodyParser = require('body-parser')
server = http.createServer( function(req, res) {
    console.dir(req.param);
    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
             console.log(JSON.stringify(body, null, 4));
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else
    {
        console.log("GET");
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }

});

port = 80;
host = '127.0.0.1'; // you should put your IP address
server.listen(port,host);
console.log('Listening at http://' + host + ':' + port);


