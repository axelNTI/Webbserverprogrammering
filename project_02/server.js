const { log } = require("console");
let mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aXaNvItH051208",
  database: "test",
});

connection.connect(function (err) {
  if (err) throw err;
  let sql = "INSERT INTO elever (namn, klassID) VALUES ('Emil Winroth', 1)";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Databas uppdaterad");
  });
});
