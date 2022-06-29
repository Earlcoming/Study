const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const { expressjwt: expressJWT } = require("express-jwt");
const msg = require("./global/msg");
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
const userInfo = require("./router/userInfo");

app.use("/api", userRouter);
app.use("/my", userInfo);

// 注册全局错误提示
const joi = require("joi");
app.use((err, req, res, next) => {
  if (err instanceof joi.ValidationError) return res.cc(err);
  res.cc(err);
  next();
});



// token错误的中间件
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") return res.cc(msg.identity);
});

app.listen(3000, () => {
  console.log("node start http://localhost:3000");
});
