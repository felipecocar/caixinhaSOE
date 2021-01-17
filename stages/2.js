const dbUtil = require('../mongoUtil');

function execute(user, msg) {
	const db = dbUtil.getDb();
	if(!db) throw new Error('Db not connected yet?');

	const query = { number: user };

	switch(msg.toUpperCase()){
		case "1":
			var users = db.collection('user');
			var newvalues = { $set: {stage: 6 } };
			users.updateOne(query, newvalues, function(err,res) {
				if (err) throw err;
				console.log('updated to stage 6');
			});
			var updateValues = {
				$push: {
					depoimentos: {
						datetime: new Date(),
						nota: 1
					}
				}
			};
			users.updateOne(query, updateValues, function(err,res) {
				if (err) throw err;
				console.log('updated to stage 6');
			});
			return "Que ótimo! Curta o dia ! :D";
		break;

		case "2": 
			var users = db.collection('user');

			var newvalues = { $set: { stage: 6 } };
			users.updateOne(query, newvalues, function(err,res){
				if (err) throw err;
				console.log('updated to stage 6');
			});

			var updateValues = {
				$push: {
					depoimentos: {
						datetime: new Date(),
						nota: 2
					}
				}
			};
			users.updateOne(query, updateValues, function(err,res) {
				if (err) throw err;
				console.log('updated to stage 6');
			});
			return  "Conte-nos mais sobre porque você está se sentindo péssimo. Digite tudinho em uma mensagem apenas, ok? \n" +
					"Lembre-se: a caixinha é um local seguro tá? Somente os professores responsáveis do SOE terão acesso a sua mensagem e poderão te ajudar.";					stages.step[pessimo].obj.execute(message.from, message.body)
		break;

		case "SAIR":
			var users = db.collection('user');

			var newvalues = { $set: { stage: 99 } };

			users.updateOne(query, newvalues, function(err,res){
				if (err) throw err;
				console.log('updated to stage 99');
			});
			return "Ok, se quiser voltar é só me mandar qualquer mensagem.\n";
		break;

		case "": return "Como está se sentindo hoje?  \n" +
						"*1* Bem \n" +
						"*2* Péssimo \n" + 
						"Digite o número da opção. Se não quiser mais receber as mensagens, envie *SAIR*";;
		break;

		default: return "Opção inválida. \n" +
							"Como está se sentindo hoje?  \n" +
    						"*1* Bem \n" +
    						"*2* Péssimo \n" + 
    						"Digite o número da opção. Se não quiser mais receber as mensagens, envie *SAIR*";
	}
}

exports.execute = execute;