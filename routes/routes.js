//requerimos express
var express = require('express');
//instanciamos el objeto enturador
var router = express.Router();

var util = require('../utils/utils'); //podemos requerirlo con o sin .js
var mongoDB = "mongodb://localhost:27017/ContaNode";
var Kutxas = require("../models/kutxas.js");
var kutxas = new Kutxas(mongoDB);

//configuramos el enrutador
router.route('api/kutxas')
	.get(function(req, res, next){
		//utilizamos nuestro modelo kutxas en lugar de escribir la logica aquí.
		kutxas.getKutxa(
			function(err, docs){
				if(err){
					util.tratarError(err, res);
				}
				res.json(docs);
		})
	})
	.post(function(req, res, next){
		var doc = req.body;
		kutxas.postKutxa(doc, function(err, docs){
			if(err){
				util.tratarError(err, res);
			}else{
				res.status(200).json(doc);
			}
		})
	})

//exportamos el enrutador
module.exports.router = router;
