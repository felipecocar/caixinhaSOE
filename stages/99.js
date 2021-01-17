const dbUtil = require('../mongoUtil');

function execute(user, msg) {

	if(!db) throw new Error('Db not connected yet?');
	var users = db.collection('user');
	var cursor = users.find();

	var query = { number: user };
	var newvalues = { $set: {number: user, stage: 99 } };

	users.updateOne(query, newvalues, function(err,res) {
		if(!db) throw new Error('Db not connected yet?');
		console.log('updated to stage 99');
	});

	return "Seja bem vindo de volta!";
}

exports.execute = execute;