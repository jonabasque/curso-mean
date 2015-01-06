//recibe como parámetro la cadena de conexión
module.exports = function Kutxas(mongoDB){
	//declara el cliente de mongo
	var MongoClient = require('mongodb').MongoClient;
	var colName = "kutxas";
	
	//función privada auxiliar para este módulo proyecto 
	//para conectarme a mongo y cuando acaba invoca un callback recibido en el parametro cb
	function connect(cbDesdeLosModelos){
		MongoClient.connect(mongoDB,function(err, db){
			if(err) cbDesdeLosModelos(err,null);
			console.log("Conectado a:" + mongoDB);
			//guardamos la colección que vamos a usar, no hace falta que lo hagamos 
			//de manera asincrona por que no interactua con la DDBB y nos bloquea nada.
			var collection = db.collection(colName);
			cbDesdeLosModelos(null,collection);
		})
	};

	return{
		//devolvemos estos 2 métodos que nos llaman desde el router.js
		getCarteras: function(cbDesdeElEnrutador){
			//callback que es llamado desde el error o no error de arriba
			connect(function (err,collection){
				collection.find().toArray(cbDesdeElEnrutador);
			})

		},

		postCarteras: function(doc,cbDesdeElEnrutador){
			connect(function (err,collection){
				collection.insert(doc,cbDesdeElEnrutador);
			})
		}
		
	};

};


