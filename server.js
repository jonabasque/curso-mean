//declaro las dependencias de módulos propios
var utils = require('./utils/utils.js');
var routes = require('./routes/routes.js');
//declaro las dependencias de módulos expternos
var express = require('express');
var bodyParser = require('body-parser');

utils.test('ready');
//instanciamos nuestra app
var app = express();
//usamos una ayuda para interpretar el json que recibimos.
app.use(bodyParser.json());
//usamos un servidor estatico para ficheros html, js, css, img
app.use(express.static(__dirname + '/client'));

//le decimos a nuestra app que use el enrutador
app.use('/', routes.router);
app.get('/test', function(req, res, next){
	res.send('<h1>App Carteras de bolsillo</h1><p>Node.js y Express funcionan :D</p>');
});

utils.test('steady');
app.listen(3000);
utils.test('go!');
