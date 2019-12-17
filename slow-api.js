var http = require("http");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    setTimeout(function() {
      res.end("Hello!");
    }, 1500);
  })
  .listen(5000);
console.log("Slow api running at http://localhost:5000/");
