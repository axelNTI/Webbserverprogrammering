const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");

app.use(express.static("./project_00/04"));
app.use(bodyParser.urlencoded({ extended: false }));

const dbUrl =
  "mongodb+srv://axelthornberg:thvianax@cluster0.sjvn8kc.mongodb.net/?retryWrites=true&w=majority";

let Message = mongoose.model("Message", {
  name: String,
  message: String,
});

app.get("/meddelanden", (req, res) => {
  Message.find().then((item) => {
    res.send(item);
  });
});

app.post("/meddelanden", (req, res) => {
  let message = new Message(req.body);
  message
    .save()
    .then((item) => {
      io.emit("message", req.body);
    })
    .catch((err) => {
      res.status(500).send("Unable to save to database");
    });
});

io.on("connection", (socket) => {
  console.log("Anslutning");
});

try {
  mongoose.connect(dbUrl);
  console.log("Ansluten till databas");
} catch {
  console.error(error);
}

http.listen(3000, () => {
  console.log("Servern körs, besök http://localhost:3000");
});
