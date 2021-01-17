const dbUtil = require('../mongoUtil');

function execute(user, msg){
	const db = dbUtil.getDb();
	if(!db) throw new Error('Db not connected yet?');

	var users = db.collection('user');
	var cursor = users.find();

		var query = { number: user };
	var newvalues = { $set: {number: user, stage: 1 } };

	users.updateOne(query, newvalues, function(err,res){
		if (err) throw err;
		console.log('updated to stage 1');
	});

	// banco.db[user].stage = 1;

	return "Olá! Seja bem vindo. \n" +
				"Estarei aqui toda semana para verificar com vc esta se sentindo. \n" +
				"As informacoes serao compartilhadas para o SOE e vc poderá contar com a ajuda da nossa escola. \n" +
				"Vc poderá cancelar as mensagens a qualquer momento. \n" + 
				"Se concorda e quer começar a receber as mensagens, digite *1*";
}

exports.execute = execute;