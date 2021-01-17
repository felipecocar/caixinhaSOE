const banco = require("../banco");

function execute(user, msg){

	banco.db[user].stage = 2;

	return "Seja bem vindo de volta!";
}

exports.execute = execute;