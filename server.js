var express = require('express');

var server = express()

server.get('/', (req, res) => {
  res.send('Hello from express');
})

server.listen(3000);
