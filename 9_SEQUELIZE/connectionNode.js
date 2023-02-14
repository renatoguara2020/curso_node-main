var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodesequelize"
});

export default connect(mapStateToProps, mapDispatchToProps)(containerName).connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address, email) VALUES ('Company Inc', 'Highway 37','renatoguara2023@gmail.com')";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});