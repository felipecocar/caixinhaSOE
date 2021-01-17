const banco = require("../banco");

function execute(user, msg){

	// console.log(msg);

	switch(msg){
		case "1": banco.db[user].stage = 2;			
		return "OK. Começaremos a te enviar mensagens. (a cada 1min)";	
		break;

		default: return "Não consigo entender sua mensagem.. digite *1* para começar a receber as mensagens. Caso não queira receber, tudo bem, não enviaremos mais mensagens. ";
	}

}

exports.execute = execute;