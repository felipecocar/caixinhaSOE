const banco = require("../banco");

function execute(user, msg){

	banco.db[user].stage = 2;
	//salvar no banco a msg

	return "Ok. anotamos tudinho. Vamos passar para os responsáveis.";
}

exports.execute = execute;