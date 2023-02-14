var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodesequelize"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address, email) VALUES ('Company Inc', 'Highway 37','renatoguara2023@gmail.com')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});