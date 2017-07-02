var http = require('http');

var server = http.createServer((req, res) => {
  http.get('http://userscontent2.emaze.com/images/be28dbea-b860-46ce-9a1c-20555a7b6022/13bf7d9602f7cd3b111fa0fd23786e53.jpg', (img) => {
    img.pipe(res);
    img.on('error', e => res.end(`Error: ${e.message}`));
  });
});

server.listen(3000);
