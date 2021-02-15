const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  } )

  conn.on('connect', () => {
    console.log('Connected to server!');
    conn.write('Name: MCA');
  })

  const sendMove = (direction) => {
    conn.write(`Move: ${direction}`);
  }

  return conn;
}

module.exports = connect;