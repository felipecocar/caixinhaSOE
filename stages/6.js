var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/caixinhaSOE'

function execute(user, msg){

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
	//salvar no banco o depoimento

	return "Ok. anotamos tudinho. Vamos passar para os responsáveis.";
}

exports.execute = execute;