var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydbw3schools"
});

conn.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
  conn.query("CREATE TABLE customers (id INT NOT NULL PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
   });

});