const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://localhost:27017";

let _db;

module.exports = {

  connectToServer: function( callback ) {
    if(_db) return callback(_db);
    MongoClient.connect( url,  function( err, client ) {
      if (err) throw err;
      _db = client.db('caixinhaSOE');
      callback( _db );
    } );
  },

  getDb: function() {
    return _db;
  }
};