const mysql = require("mysql");

const db = mysqldb.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "my_api_db",
});

module.exports = db;
