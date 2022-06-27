/*
 $ @Author: 'Earl'
 $ @Date: 2022-06-24 17:57:21
 $ @LastEditors: 'Earl'
 $ @LastEditTime: 2022-06-27 14:37:59
 $ @FilePath: \daoqid:\Study\Nodejs\api_server\app.js
 $ @Description: app入口文件
 */
const express = require("express");
const cors = require("cors");
const Joi = require("joi");
const parser = require("body-parser");

const app = express();
const userRouter = require("./router/user");

// 配置跨域，兼容ie10+
app.use(cors());

// form表单解析配置，智能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));


// 注册api
app.use("/api", userRouter);

// 错误级别验证
app.use((err, req, res, next) => {
  if (err instanceof Joi.ValidationError) {
    return res.cc(err);
  }
  res.cc(err);
});

app.listen(3000, () => {
  console.log("api server http://localhost:3000");
});
