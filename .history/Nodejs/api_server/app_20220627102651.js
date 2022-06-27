/*
 $ @Author: 'Earl' 'earlcoming@163.com'
 $ @Date: 2022-06-24 17:57:21
 $ @LastEditors: 'Earl' 'earlcoming@163.com'
 $ @LastEditTime: 2022-06-27 10:26:50
 $ @FilePath: \daoqid:\Study\Nodejs\api_server\app.js
 $ @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express");
const cors = require("cors");
const app = express();

const userRouter = require("./router/user");

// 配置跨域，兼容ie10+
app.use(cors());

// form表单解析配置，智能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }));

// 优化代码,注册全局中间件res.cc
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
