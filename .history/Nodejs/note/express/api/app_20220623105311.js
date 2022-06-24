const express = require("express");
const app = express();
const parser = require("body-parser");

const router = require("./router");


// 注册全局中间件
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("start server at http://localhost:3000/");
});
