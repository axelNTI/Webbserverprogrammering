const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const fs = require("node:fs");
app.use(express.static("./04"));
app.use(bodyParser.urlencoded({ extended: false }));

function writeMessage(message, callback) {
  readMessages((err, messages) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    }
    messages.push(message);
    fs.writeFile("./messages.json", JSON.stringify(messages), (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        res.sendStatus(500);
      }
      callback(null);
    });
  });
}

function readMessages(callback) {
  fs.readFile("./messages.json", "utf8", (err, data) => {
    if (err) {
      console.error(err)
      res.sendStatus(500)
    }
    let messages = JSON.parse(data);
    callback(null, messages);
  });
}

readMessages((err, messages) => {
  if (err) {
    console.error(err)
    res.sendStatus(500)
  }
  app.get("/meddelanden", (req, res) => {
    res.send(messages);
  });

  app.post("/meddelanden", (req, res) => {
    messages.push(req.body);

    // Call writeMessage and send the response only when it's done
    writeMessage(req.body, (writeErr) => {
      if (writeErr) {
        console.error(writeErr)
        res.sendStatus(500)
      }
      io.emit("message", req.body);
      res.sendStatus(200);
    });
  });
});

io.on("connection", (socket) => {
  console.log("Anslutning");
});

http.listen(3000, () => {
  console.log("Servern körs, besök http://localhost:3000");
});
  