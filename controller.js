const pingController = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("pong");
};

const helloController = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world");
};

module.exports = {
  pingController,
  helloController,
};
