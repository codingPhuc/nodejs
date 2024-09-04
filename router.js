const { helloController, pingController } = require("./controller");
const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

function routing(request, response) {
  switch (request.url) {
    case "/ping":
      if (request.method === HTTP_METHODS.GET) {
        handlePing(request, response);
      } else {
        response.writeHead(405);
        response.end("Method not allowed");
      }
      break;
    case "/":
      if (request.method === HTTP_METHODS.GET) {
        handleHello(request, response);
      } else {
        response.writeHead(404);
        response.end("No Element");
      }
      break;
    default:
      response.writeHead(400);
      response.end("Bad Request");
  }
}

module.exports = {
  routing,
};
