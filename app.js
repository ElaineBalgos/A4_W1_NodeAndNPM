const http = require('http'); // like a PHP require

// require is more or less the same as a JS import

const hostname = '127.0.0.1'; // this is a localhost
const port = process.env.PORT || 3000; //localhost:3000

// request, response
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Sup World, its authoring 4 today');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});