let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if(key === '\u001B\u005B\u0044' || key === 'a'){
    connection.write('Move: left');
  }
  if(key === '\u001B\u005B\u0041' || key === 'w'){
    connection.write('Move: up')
  }
  if(key === '\u001B\u005B\u0043' || key === 'd'){
    connection.write('Move: right')
  }
  if(key === '\u001B\u005B\u0042' || key ==='s'){
    connection.write('Move: down')
  }
}

module.exports = { setupInput };