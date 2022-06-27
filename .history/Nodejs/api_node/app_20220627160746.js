/*
 $ @Author: 'Earl'
 $ @Date: 2022-06-27 16:04:10
 $ @LastEditors: 'Earl'
 $ @LastEditTime: 2022-06-27 16:07:32
 $ @FilePath: \daoqid:\Study\Nodejs\api_node\app.js
 $ @Description: app接口注册
 */
const express = require("express");
const app = express();
const userRouter = require('./router/user')

app.use();

app.listen(3000, () => {
  console.log("node start http://localhost:3000");
});
