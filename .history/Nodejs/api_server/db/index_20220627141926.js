const mysql = require("mysql");

const db = mysql.createPool({
  const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "my_app_db",
});

module.exports = db;
