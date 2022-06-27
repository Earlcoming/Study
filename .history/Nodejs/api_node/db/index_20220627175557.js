const db = require("mysql");

db.createPool({
  user: "root",
  password: "admin123",
  host: "127.0.0.1",
  database: "my_api_db",
});

module.exports = db;
