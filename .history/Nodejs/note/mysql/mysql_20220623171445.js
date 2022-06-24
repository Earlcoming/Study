const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "my_db01",
});

// const sqlStr = "select * from users";
// db.query(sqlStr, (err, results) => {
//   if (err) return console.log(err.message);
//   console.log("登录成功了", results);
// });

const users = { username: "Splider-man", password: "123456789" };
const addUsername = "insert into users (username,password) values (?,?)";
db.query(addUsername, [users.username, users.password], (err, results) => {
  if (err) return console.log(err.message);
  if (results.aftectedRows === 1) {
    console.log("插入数据成功");
  }
  console.log("更新成功了");
});
