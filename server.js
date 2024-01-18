const express = require("express");
const app = express();
app.use(express.static("./04"));
let messages = [
  { name: "Axel", content: "Ost" },
  { name: "Thornberg", content: "Yep" },
];
app.get("/meddelanden", (req, res) => {
  res.send(messages);
});
app.listen(3000, () => {
  console.log("Servern körs, besök http://localhost:3000");
});
