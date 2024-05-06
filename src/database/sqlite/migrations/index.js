const sqliteConnection = require("../../sqlite");
const createUsers = require('./createUsers.js');

async function migrationRun(){
  const schemas = [
    createUsers
  ].join('')

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error))
}

module.exports = migrationRun