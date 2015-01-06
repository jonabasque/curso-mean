var utils = require('./utils/utils.js');
var routes = require('./routes/routes.js');
var express = require('express');
var bodyParser = require('body-parser');

utils.test('ready');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.use('/', routes.router);
app.get('/test', function(req, res, next){
	res.send('<h1>App Carteras de bolsillo</h1><p>Node.js y Express funcionan :D</p>');
});

utils.test('steady');
app.listen(3000);	
