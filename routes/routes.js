//requerimos express
var express = require('express');
var router = express.Router();

var util = require('../utils/utils.js');
var mongoDB = "mongodb://localhost:27017/ContaNode";
var Kutxas = require("../models/kutxas.js");
var kutxas = new Kutxas(mongoDB);

//configuramos el enrutador
router.route('api/cartera')
	.get(function(req, res, next){
		kutxas.getKutxa(function(err, docs){
			if(err) util.tratarError(err, res);
			res.json(docs);
		})
	})
	.post(function(req, res, next){
		var doc = req.body;
		kutxas.postKutxa(doc, function(err, docs){
			if(err) util.tratarError(err, res);
			res.status(200).json(doc);
		})
	})

//exportamos el enrutador
module.exports.router = router;