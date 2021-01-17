// Supports ES6
// import { create, Whatsapp } from 'venom-bot';

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/caixinhaSOE'


// var mongoUtil = require('./mongoUtil');

// mongoUtil.connectToServer(function(err,client) {
//   if (err) throw err;
//   var db = client.db('caixinhaSOE');
//   var users = db.collection('user');
//   var cursor = users.find();

//   const venom = require('venom-bot');

//   venom
//     .create()
//     .then((client) => start(client))
//     .catch((erro) => {
//       console.log(erro);
//     });

//   const banco = require('./banco');
//   const stages = require('./stages')

//   function start(client) {

//     //ENVIO PERIODICO DE MENSAGENS
//     setInterval(function() {
//       cursor.forEach(function(result){
//         console.log(result.number);
//         console.log(result.stage);

//         //STAGE 2 = ESTÁGIO DE RECEBIMENTO CONTÍNUO
//         if(result.stage == 2){
//           client.sendText(
//             result.number, 
//             stages.step[result.stage].obj.execute(number, "") //EXECUTA O ESTÁGIO 2
//           );
//         }

//       }, function (error){
//         // callback(error, results);
//       });

//       // for (var key in banco.db) {
//       //   console.log("number: " + key + " stage: " + banco.db[key].stage);
//       //   if(banco.db[key].stage == 2){
//       //     client.sendText(
//       //       key, 
//       //       stages.step[getStage(key)].obj.execute(key, "")
//       //     );
//       //   }
//       // }
//     }, 3000); //PERIODICIDADE = 10 SEGUNDOS

//     //ENVIO DE MENSAGEM PELO USUÁRIO
//     client.onMessage((message) => {
//       var users = db.collection('user');
//       var cursor = users.find();
//       users.findOne({"number" : message.from}, function(err, result){
//         if(result){
//           client.sendText(
//             message.from, 
//             stages.step[result.stage].obj.execute(message.from, message.body)
//           );
//         }else{
//           console.log(err);
//         }
          
//       });
//     });
//   }

//   // db.collection('user').findOne({}, function (findErr, result) {
//   //   if (findErr) throw findErr;
//   //   console.log(result);
//   //   client.close();
//   // });

// } );


MongoClient.connect(url, function(err,client) {
  if (err) throw err;
  var db = client.db('caixinhaSOE');
  var users = db.collection('user');
  var cursor = users.find();

  const venom = require('venom-bot');

  venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
      console.log(erro);
    });

  // const banco = require('./banco');
  const stages = require('./stages')

  function start(client) {

    //ENVIO PERIODICO DE MENSAGENS
    setInterval(function() {
      cursor.forEach(function(result){
        console.log(result.number);
        console.log(result.stage);

        //STAGE 2 = ESTÁGIO DE RECEBIMENTO CONTÍNUO
        if(result.stage == 2){
          client.sendText(
            result.number, 
            stages.step[result.stage].obj.execute(result.number, "") //EXECUTA O ESTÁGIO 2
          );
        }

      }, function (error){
        // callback(error, results);
      });

      // for (var key in banco.db) {
      //   console.log("number: " + key + " stage: " + banco.db[key].stage);
      //   if(banco.db[key].stage == 2){
      //     client.sendText(
      //       key, 
      //       stages.step[getStage(key)].obj.execute(key, "")
      //     );
      //   }
      // }
    }, 10000); //PERIODICIDADE = 10 SEGUNDOS

    //ENVIO DE MENSAGEM PELO USUÁRIO
    client.onMessage((message) => {
      var users = db.collection('user');
      var cursor = users.find();
      users.findOne({"number" : message.from}, function(err, result){
        if(result){
          client.sendText(
            message.from, 
            stages.step[result.stage].obj.execute(message.from, message.body)
          );
        }else{
          console.log(err);
        }
          
      });
    });
  }

  // db.collection('user').findOne({}, function (findErr, result) {
  //   if (findErr) throw findErr;
  //   console.log(result);
  //   client.close();
  // });
})




function getStage(user){
  return banco.db[user].stage;
}