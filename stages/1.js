const dbUtil = require('../mongoUtil');

function execute(user, msg){

	const db = dbUtil.getDb();

	switch(msg){
		case "1": 
		var users = db.collection('user');
		var cursor = users.find();

		var query = { number: user };
		var newvalues = { $set: {number: user, stage: 2 } };

		users.updateOne(query, newvalues, function(err,res){
			if(!db) throw new Error('Db not connected yet?');
			console.log('updated to stage 2');
		});

		return "OK. Começaremos a te enviar mensagens. (a cada 1min)";	
		break;

		default: return "Não consigo entender sua mensagem.. digite *1* para começar a receber as mensagens. Caso não queira receber, tudo bem, não enviaremos mais mensagens. ";
	}

}

exports.execute = execute;