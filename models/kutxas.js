//recibe como parámetro la cadena de conexión
module.exports = function Kutxas(mongoDB){
	//declara el cliente de mongo
	var MongoClient = require('mongodb').MongoClient;
	//declaramos la coleccion con la que vamos a trabajar
	var colName = "kutxas";

	//función privada auxiliar para este módulo proyecto para conectarme a mongo...
	// y cuando acaba invoca una funcion callback recibido en el parametro cbDesdeLosModelos
	//Estamos envolviendo la función connect de Mongo con la nuestra para tratar el error y la coleccion
	function connect(cbDesdeLosModelos){
		MongoClient.connect(mongoDB,function(err, db){
			if(err){
				cbDesdeLosModelos(err,null);
			}
			console.log("Conectado a:" + mongoDB);
			//guardamos la colección que vamos a usar, no hace falta que lo hagamos
			//de manera asincrona por que no interactua con la DDBB y nos bloquea nada.
			var collection = db.collection(colName);
			cbDesdeLosModelos(null,collection);
		})
	};

	return{
		//devolvemos estos 2 métodos que nos llaman desde el router.js
		getKutxa: function(cbDesdeElEnrutador){
			//Llamamos a nuestra función connect y le pasamos un parametros, que será...
			//callback que es llamado desde el error o no error de arriba
			connect(function (err, collection){
				//Le pasamos otro método callback que recibimos desde el enrutador...
				//cuando termine el método find() y toArray() para no bloquear a nadie.
				collection.find().toArray(cbDesdeElEnrutador);
			})

		},

		postKutxa: function(doc,cbDesdeElEnrutador){
			connect(function (err,collection){
				collection.insert(doc,cbDesdeElEnrutador);
			})
		}

	};

};
