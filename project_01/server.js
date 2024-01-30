const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");
app.use(express.static("./webpage"));
app.use(bodyParser.urlencoded({ extended: false }));

http.listen(3000, () => {
  console.log("http://localhost:3000");
});
