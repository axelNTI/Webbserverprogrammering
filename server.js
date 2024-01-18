const express = require("express");
const app = express();
app.use(express.static("./04"));
app.listen(3000, () => {
  console.log("Servern körs, besök http://localhost:3000");
});
