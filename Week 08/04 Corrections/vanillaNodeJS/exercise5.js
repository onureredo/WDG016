import http from 'http';
const PORT = 80;

const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
