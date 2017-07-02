var express = require('express');

var server = express()

server.get('/', (req, res) => {
  res.sendFile(`${__dirname}/app/index.html`);
})

server.listen(3000);
