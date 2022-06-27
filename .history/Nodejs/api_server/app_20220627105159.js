/*
 $ @Author: 'Earl'
 $ @Date: 2022-06-24 17:57:21
 $ @LastEditors: 'Earl'
 $ @LastEditTime: 2022-06-27 10:51:27
 $ @FilePath: \daoqid:\Study\Nodejs\api_server\app.js
 $ @Description: app入口文件
 */
const express = require("express");
const cors = require("cors");
const app = express();

// 导入 Joi 来定义验证规则
const Joi = require("joi");
// 1. 导入 @escook/express-joi
const expressJoi = require("@escook/express-joi");

const userSchema = {
  // 2.1 校验 req.body 中的数据
  body: {
    username: Joi.string().alphanum().min(3).max(12).required(),
    password: Joi.string()
      .pattern(/^[\S]{6,15}$/)
      .required(),
    repassword: Joi.ref('password')
  },
  // 2.2 校验 req.query 中的数据
  query: {
    name: Joi.string().alphanum().min(3).required(),
    age: Joi.number().integer().min(1).max(100).required()
  },
  // 2.3 校验 req.params 中的数据
  params: {
    id: Joi.number().integer().min(0).required()
  }
}





// 配置跨域，兼容ie10+
app.use(cors());

// form表单解析配置，智能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }));

// 优化代码,注册全局中间件res.cc,提交错误函数/字符串(err)和状态码(status)
app.use((req, res, next) => {
  res.cc = (err, status = 401) => {
    return res.send({
      status,
      msg: err instanceof Error ? err.message : err,
    });
  };
  next();
});

// 注册api
app.use("/api", userRouter);

app.listen(3000, () => {
  console.log("api server http://localhost:3000");
});
