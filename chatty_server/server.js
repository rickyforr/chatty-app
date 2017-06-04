const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');
const uuidV1 = require('uuid/v1');
// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', function connection(ws, req) {
  console.log('client connected')
  console.log(wss.clients.size)

  wss.clients.forEach(function each(client) {
      const clientSize = {type: 'clientSize', size: wss.clients.size}
      const stringSize = JSON.stringify(clientSize)
      if (client.readyState === WebSocket.OPEN) {
      client.send(stringSize);
      }
   });



  ws.on('message', function incoming(message) {

    wss.clients.forEach(function each(client) {

      const gotMessage = JSON.parse(message)

      gotMessage.id = uuidV1()


       const stringMessage = JSON.stringify(gotMessage)
      if (client.readyState === WebSocket.OPEN) {
      client.send(stringMessage);
      }
    });


});
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', function close() {
  console.log('disconnected');

  wss.clients.forEach(function each(client) {

      const clientSize = {type: 'clientSize', size: wss.clients.size}
      const stringSize = JSON.stringify(clientSize)
      if (client.readyState === WebSocket.OPEN) {
      client.send(stringSize);
      }
    });
});
});