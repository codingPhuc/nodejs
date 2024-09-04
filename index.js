const { createServer } = require("node:http");
const { routing } = require("./router");
const hostname = "127.0.0.1";
const port = 3000;

function onRequest(request, response) {
  routing(request, response);
}

const server = createServer(onRequest);

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
