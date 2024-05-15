// const http = require('http');
import http from 'http';
const PORT = 8000;

const requestListener = function (req, res) {
  res.writeHead(418);
  res.end('Hello World');
};

const server = http.createServer(requestListener);
server.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
