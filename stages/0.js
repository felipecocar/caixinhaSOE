const banco = require("../banco");

function execute(user, msg){

	banco.db[user].stage = 1;

	return "Olá! Seja bem vindo. \n" +
	    	"Estarei aqui toda semana para verificar com vc esta se sentindo. \n" +
	    	"As informacoes serao compartilhadas para o SOE e vc poderá contar com a ajuda da nossa escola. \n" +
	    	"Vc poderá cancelar as mensagens a qualquer momento. \n" + 
	    	"Se concorda e quer começar a receber as mensagens, digite *1*";

	

	
}

exports.execute = execute;