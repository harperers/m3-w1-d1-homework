var http = require("http");
var path = require("path");
var fs = require("fs");
var hostname = "localhost";
var port = 5000;
var server = http.createServer(function (req, res) {
  let fileUrl = req.url;
  res.setHeader("Content-type", "text/html");
  if (fileUrl === "/") {
    res.end(`<html><body><h1>Home Page.</h1></body></html>`);
  }
  else if (fileUrl === "/about") {
    res.end(`<html><body><h1>About Page.</h1></body></html>`);
  }
  else if (fileUrl === "/contact") {
    res.end(`<html><body><h1>Contact Page.</h1></body></html>`);
  }
  else {
    res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
  }
});
server.listen(port, hostname, () => {
  console.log(`The NodeJS server on port ${port} is now running…`);
});
