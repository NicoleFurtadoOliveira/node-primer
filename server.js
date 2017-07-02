var express = require('express');
var server = express();
var http = server.listen(3000);
var io = require('socket.io')(http);

server.get('/', (req, res) => {
  res.sendFile(`${__dirname}/app/index.html`);
});

io.on('connection', (socket) => {
  console.log(`> New connection: ${socket.id}`);
  socket.emit('connected', { timestamp: new Date() });
  socket.on('message', (data) => {
    console.log(`< ${socket.id}: ${data.text}`);
  });
});
