/*
 $ @Author: 'Earl'
 $ @Date: 2022-06-24 17:57:21
 $ @LastEditors: 'Earl'
 $ @LastEditTime: 2022-06-27 15:14:41
 $ @FilePath: \daoqid:\Study\Nodejs\api_server\app.js
 $ @Description: app入口文件
 */
const express = require("express");
const cors = require("cors");
const Joi = require("joi");
const parser = require("body-parser");
const { expressjwt: expressJWT } = require("express-jwt");
const config = require("./config");

const app = express();
const userRouter = require("./router/user");
const userInfo = require('./router/userinfo')

// 配置跨域，兼容ie10+
app.use(cors());

// form表单解析配置，智能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// 优化代码,注册全局中间件res.cc,提交错误函数/字符串(err)和状态码(status)
app.use((req, res, next) => {
  res.cc = (err, status = 401) => {
    res.send({
      status,
      msg: err instanceof Error ? err.message : err,
    });
  };
  next();
});

// 配置token
const jwtFn = expressJWT({
  secret: config.jwtSecretKey,
  algorithms: ["HS256"],
}).unless({ path: [/\/^api\//] });

app.use(jwtFn);
// 注册api
app.use("/api", userRouter);
app.use("/my", userInfo);

// 错误级别验证
app.use((err, req, res, next) => {
  if (err instanceof Joi.ValidationError) return res.cc(err);
  if (err.name === "UnauthorizedError") return res.cc("身份认证失败");
  res.cc(err);
});

app.listen(3000, () => {
  console.log("api server http://localhost:3000");
});
