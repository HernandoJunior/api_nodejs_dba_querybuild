import sqliteConnection from "../../sqlite/index.js";
import createUsers from './createUsers.js';

async function migrationRun(){
  const schemas = [
    createUsers
  ].join('')

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error))
}

export default migrationRun;