const fs = require('fs');
const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  const file = fs.createReadStream('index2.html');
  file.pipe(response);
}).listen(8080);

console.log('Listening on port 8080...');