/*
 $ @Author: Author: 'Earl' 'earlcoming@163.com'
 $ @Author: Date: 2022-06-24 18:02:03
 $ @Author: LastEditors: 'Earl' 'earlcoming@163.com'
 $ @Author: LastEditTime: 2022-06-27 10:26:02
 $ @Author: FilePath: \daoqid:\Study\Nodejs\api_server\router\user.js
 $ @Author: Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express");
const router = express.Router();

const { regUser, login } = require("../router_handler/user");

// 注册新用户
router.post("/reguser", regUser);

// 登录
router.post("/login", login);

module.exports = router;
