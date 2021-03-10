const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
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

  conn.write('Move: up');

  


  return conn;
};

module.exports = { connect };


