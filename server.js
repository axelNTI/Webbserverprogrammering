const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("./04"));
app.use(bodyParser.urlencoded({ extended: false }));
let messages = [
  { name: "Axel", message: "Ost" },
  { name: "Thornberg", message: "Yep" },
];
app.get("/meddelanden", (req, res) => {
  res.send(messages);
});
app.post("/meddelanden", (req, res) => {
  messages.push(req.body)
});
app.listen(3000, () => {
  console.log("Servern körs, besök http://localhost:3000");
});

