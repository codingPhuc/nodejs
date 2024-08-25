const { helloController, pingController } = require("./controller");

const router = (req, res) => {
  switch (req.url) {
    case "/ping":
      if (req.method === "GET") {
        pingController(req, res);
      } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method not allowed");
      }
      break;
    case "/":
      if (req.method === "GET") {
        helloController(req, res);
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("No Element");
      }
    default:
      console.log(req.url);
  }
};

module.exports = {
  router,
};
