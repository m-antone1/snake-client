const { setupInput } = require('./input.js')
const connect  = require('./client.js');
console.log('Connecting...');
let connection = connect();
setupInput(connection);