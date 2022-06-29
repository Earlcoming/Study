const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

// 注册json传参
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// 注册跨域
app.use(cors());

// 注册全局成功回调函数
const { resCC } = require("./global/user");
app.use(resCC);

// 注册路由
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 注册全局错误提示
const joi = require


app.listen(3000, () => {
  console.log("node start http://localhost:3000");
});
