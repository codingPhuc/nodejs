const { helloController, pingController } = require("./controller");
const HTTP_METHODS_STATUS_CODE = require("./httpMethodsStatusCode");

function handleRequest(request, response) {
  switch (request.url) {
    case "/ping":
      if (request.method === HTTP_METHODS_STATUS_CODE.GET) {
        pingController(request, response);
      } else {
        response.writeHead(HTTP_METHODS_STATUS_CODE.METHOD_NOT_ALLOWED);
        response.end(HTTP_MESSAGES.METHOD_NOT_ALLOWED);
      }
      break;
    case "/":
      if (request.method === HTTP_METHODS_STATUS_CODE.GET) {
        helloController(request, response);
      } else {
        response.writeHead(HTTP_METHODS_STATUS_CODE.NOT_FOUND);
        response.end(HTTP_MESSAGES.NO_ELEMENT);
      }
      break;
    default:
      response.writeHead(HTTP_METHODS_STATUS_CODE.BAD_REQUEST);
      response.end(HTTP_MESSAGES.BAD_REQUEST);
  }
}

module.exports = {
  handleRequest,
};
