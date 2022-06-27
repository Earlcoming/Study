const db = require("mysql");

db.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "my_api_db",
});

module.exports = db;
