import Server from './server/server';
import router from './routes/router';

const env = require('node-env-file');
const path = require('path');

env(path.resolve(__dirname + '/.env'));

require('./config/config');

const port = Number(process.env.PORT) || 0;
const server = Server.init(port);
server.app.use(router);

// import MySQL from './mysql/mysql';
// MySQL.instance;

server.start(() => {
  console.log('Servidor corriendo en el puerto', port);
});