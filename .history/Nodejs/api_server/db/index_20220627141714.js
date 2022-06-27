/*
 $ @Author: 'Earl'
 $ @Date: 2022-06-25 08:46:57
 $ @LastEditors: 'Earl'
 $ @LastEditTime: 2022-06-27 14:16:57
 $ @FilePath: \daoqid:\Study\Nodejs\api_server\db\index.js
 $ @Description: 
 */
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "my_app_db",
});

db
module.exports = db;
