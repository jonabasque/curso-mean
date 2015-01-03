var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoDB = "mongodb://localhost:27017/ContaNode";

var app = express();
console.log('ready');

app.route('/api/cartera')
	.get(function (req, res){
		MongoClient.connect(mongoDB, 
			function(err, db){
				if(err) tratarError(err, res);
				var collection = db.collection('carteras');
				collection.find().toArray( 
					function(err, docs){
						if(err) tratarError(err, res);
						res.json(docs);

				})
			});
	})
	.post(function(req, res){
		var doc = req.body;
		MongoClient.connect(mongoDB, function(err, db){
			if(err) tratarError(err, res);
			var collection = db.collection('carteras');
			collection.insert(doc, function(err, result){
				if(err) tratarError(err, res);
				res.status(200);
			});
		});
	
	})

function tratarError(error, res){
	console.log(error);
	res.send(500, 'Error accediendo a datos');
}

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.listen(3000);	
