const http = require('http'); // like a PHP require
const stream = require('fs')

// require is more or less the same as a JS import
// const hostname = '127.0.0.1'; // this is a localhost
const port = process.env.PORT || 3000; //localhost:3000  double pipe || means or

// request, response
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let url = req.url; // ie localhost:3000/contact

  switch (url) {
    case "/contact":
        stream.readFile('contact.html', null ((err, data) => {
            if(err) {
              res.writeHead(404);
              res.write('404 not found');
            } else {
              res.write(data);
            }
        }))
    break;

    case "/portfolio":
      stream.readFile('portfolio.html', null ((err, data) => {
          if(err) {
            res.writeHead(404);
            res.write('404 not found');
          } else {
            res.write(data);
          }
      }))
    break;
    
    default:
      res.end('sup world! its authoring day today!')

  }

  res.end('Sup World, its authoring 4 today');
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});