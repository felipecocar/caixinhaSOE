// const banco = require("../banco");

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/caixinhaSOE'

function execute(user, msg){

	switch(msg){
		case "1": 

		MongoClient.connect(url, function(err,client) {
		  if (err) throw err;
		  var db = client.db('caixinhaSOE');
		  var users = db.collection('user');
		  var cursor = users.find();

		  var query = { number: user };
			var newvalues = { $set: {number: user, stage: 2 } };

			users.updateOne(query, newvalues, function(err,res){
				if (err) throw err;
				console.log('updated to stage 2');
			});
		});

		return "OK. Começaremos a te enviar mensagens. (a cada 1min)";	
		break;

		default: return "Não consigo entender sua mensagem.. digite *1* para começar a receber as mensagens. Caso não queira receber, tudo bem, não enviaremos mais mensagens. ";
	}

}

exports.execute = execute;