const net = require('net');
const { PORT } = require('./constants');
const { IP } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on("connect", () => {
    console.log('Connected!');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Data coming from server');
    console.log(data);
  });
  
  conn.write('Name: JIM');
  
  return conn;
};

module.exports = { connect };


