const app = require('./app');
const db_connection = require('./database');

function main() {
  db_connection();

  app.listen(app.get('port'));

  console.log('Servidor en http://localhost:' + app.get('port'));
}

main();