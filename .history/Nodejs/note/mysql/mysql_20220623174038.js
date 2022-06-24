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

// const users = { username: "sqplas", password: "a123456789" };
// const addUsername = "insert into users (username,password) values (?,?)";
// db.query(addUsername, [users.username, users.password], (err, results) => {
//   if (err) return console.log(err.message);
//   if (results.affectedRows === 1) {
//     console.log("插入数据成功");
//   }
// });

// 添加数据
// const users = { username: "mysql", password: "a123456789" };
// const sqlStr = "insert into users set ?";
// db.query(sqlStr, users, (err, results) => {
//   if (err) return console.log("插入错误", err.message);
//   if (results.affectedRows === 1) {
//     console.log("插入成功");
//   }
// });

// 更新数据
const user = { id: 7, username: "aaa", password: "0000" };
const sqlStr = 'update users set username=?,password=? where id=?'
db.query

