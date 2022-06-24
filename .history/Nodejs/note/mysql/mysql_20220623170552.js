const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "my_db01",
});

db.query("select * from users", (err, results) => {
  if (err) return console.log(err.message);
  result
  console.log("登录成功了", results);
  
});
