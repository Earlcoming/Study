/*
 $ @Author: 'Earl'
 $ @Date: 2022-06-24 18:02:03
 $ @LastEditors: 'Earl'
 $ @LastEditTime: 2022-06-27 11:05:53
 $ @FilePath: \daoqid:\Study\Nodejs\api_server\router\user.js
 $ @Description: 
 */
const express = require("express");
const router = express.Router();
const {reg_user_schema{ = require("../schema/user");

const { regUser, login } = require("../router_handler/user");
const expressJoi = require("@escook/express-joi");
// 注册新用户
router.post("/reguser", expressJoi(reg_user_schema), regUser);

// 登录
router.post("/login", login);

module.exports = router;
