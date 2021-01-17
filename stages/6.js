const dbUtil = require('../mongoUtil');

function execute(user, msg) {
	const db = dbUtil.getDb();
	if(!db) throw new Error('Db not connected yet?');

	var users = db.collection('user');
	// var cursor = users.find();

	var query = { number: user };
	var datetimeNow = new Date();

	// Atualiza STAGE
	var stageValues = {
		$set: { stage: 2 }
	};
	users.updateOne(query, stageValues, function(err,res){
		if (err) throw err;
		console.log('updated to stage 2');
	});

	// Atualiza depoiments
	var depoimentosValues = {
		$push: {
			depoimentos: {
				datetime: datetimeNow,
				msgSent: msg,
				nota: 2
			}
		}
	}
	users.updateOne(query, depoimentosValues, function(err,res){
		if (err) throw err;
		console.log('updated to stage 2');
	});

	return "Ok. anotamos tudinho. Vamos passar para os responsáveis.";
}

exports.execute = execute;