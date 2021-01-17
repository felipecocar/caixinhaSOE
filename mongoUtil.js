const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://localhost:27017";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  function( err, client ) {
      db = client.db('caixinhaSOE');
      // return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};