const express = require("express");
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));


app.use("/register", (req, res) => {
  res.statusCode = 202;
  res.sendFile(__dirname + "/register.html");
});

app.use("/login", (req, res) => {
    res.statusCode = 202;
    res.sendFile(__dirname + "/login.html");
  });

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/index.html");
});
app.use((req, res) => {
    res.statusCode = 404;
    res.sendFile(__dirname + "/error.html");
});

module.exports = app;