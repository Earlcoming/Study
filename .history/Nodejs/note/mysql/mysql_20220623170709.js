const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "my_db01",
});

const sqlStr = "select * from users";
db.query(sqlStr, (err, results) => {
  if (err) return console.log(err.message);
  console.log("登录成功了", results.length);
});
