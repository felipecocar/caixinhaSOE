var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/caixinhaSOE'


function execute(user, msg){

	switch(msg.toUpperCase()){
		case "1": 	//salvar no banco a opcao
					return "Que ótimo! Curta o dia ! :D";
		break;

		case "2": 	MongoClient.connect(url, function(err,client) {
					  if (err) throw err;
					  var db = client.db('caixinhaSOE');
					  var users = db.collection('user');
					  var cursor = users.find();

					  var query = { number: user };
						var newvalues = { $set: {number: user, stage: 6 } };

						users.updateOne(query, newvalues, function(err,res){
							if (err) throw err;
							console.log('updated to stage 6');
						});
					});
					return  "Conte-nos mais sobre porque você está se sentindo péssimo. Digite tudinho em uma mensagem apenas, ok? \n" +
	 						"Lembre-se: a caixinha é um local seguro tá? Somente os professores responsáveis do SOE terão acesso a sua mensagem e poderão te ajudar.";					stages.step[pessimo].obj.execute(message.from, message.body)
		break;

		case "SAIR": MongoClient.connect(url, function(err,client) {
					  if (err) throw err;
					  var db = client.db('caixinhaSOE');
					  var users = db.collection('user');
					  var cursor = users.find();

					  var query = { number: user };
						var newvalues = { $set: {number: user, stage: 99 } };

						users.updateOne(query, newvalues, function(err,res){
							if (err) throw err;
							console.log('updated to stage 99');
						});
					});;
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