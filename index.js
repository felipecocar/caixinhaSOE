// Supports ES6
// import { create, Whatsapp } from 'venom-bot';


const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

const banco = require('./banco');
const stages = require('./stages')

function getStage(user){
  return banco.db[user].stage;
}

// console.log(stages.step[getStage("user1")].obj.execute());
// console.log(stages.step[getStage("user2")].obj.execute());

function start(client) {

  // obj = Object.values(banco.db[]);

  setInterval(function() {
    for (var key in banco.db) {
      console.log("number: " + key + " stage: " + banco.db[key].stage);
      if(banco.db[key].stage == 2){
        client.sendText(
          key, 
          stages.step[getStage(key)].obj.execute(key, "")
        );
      }
    }
  }, 10000);


  // for (var key in banco.db) {
  //   if (banco.db.hasOwnProperty(key)) {
  //     if(stages.step[getStage(key)] == 2){
  //        setInterval(function() {
  //          client.sendText(
  //             key, 
  //             stages.step[getStage(key)].obj.execute(message.from, "")
  //           );
  //         }, 5000);
  //     }
  //     console.log(key + " -> " + banco.db[key]);
  //   }
  // }

  // for (var i = 0; i < banco.db[].length; i++){
  //     setInterval(function() {
  //       client.sendText(
  //         banco.db[i], 
  //         stages.step[getStage(message.from)].obj.execute(message.from, message.body)
  //       );
  //       alert("Interval reached every 5s")
  //     }, 5000);
  // }

  client.onMessage((message) => {
    // console.log(message);
    // if (message.body === 'Hi' && message.isGroupMsg === false) {
    //   client
    //     .sendText(message.from, 'Welcome Venom 🕷')
    //     .then((result) => {
    //       console.log('Result: ', result); //return object success
    //     })
    //     .catch((erro) => {
    //       console.error('Error when sending: ', erro); //return object error
    //     });
    // }

    // let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body);

    // for(let index = 0; index < resp.length; index++){
    //   const element = resp[index];
    //   client.sendText(message.from, element);
    // }

    client.sendText(
      message.from, 
      stages.step[getStage(message.from)].obj.execute(message.from, message.body)
    );

    

    // if(getStage(message.from) === 1){
    //   client.sendText(
    //     message.from, 
    //     stages.step[getStage(message.from)].obj.execute()
    //   );
    // }

  });
}