var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public', {index: 'html/index.html'}));

//app.get('/', function(req, res) {
//    res.sendFile(__dirname + '/public/html/index.html');
//});

app.listen(port, function() {
    console.log('http://localhost:' + port);
});
