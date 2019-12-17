var http = require("http");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    http
      .get("http://localhost:5000/", function(resp) {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", function(chunk) {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", function() {
          res.end("Response: " + data);
        });
      })
      .on("error", function(err) {
        console.log("Error: " + err.message);
      });
  })
  .listen(3000);
console.log("Server running at http://localhost:3000/");
