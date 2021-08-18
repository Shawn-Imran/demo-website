const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./view/index.html");
  } else if (req.url === "/login") {
    handleReadFile(200, "./view/login.html");
  } else if (req.url === "/register") {
    handleReadFile(200, "./view/register.html");
  } else {
    handleReadFile(200, "./view/error.html");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});