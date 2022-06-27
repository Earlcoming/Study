const express = require("express");
const router = express.Router();

const { regUser, login } = require("../router_handler/user");
aa;
// 注册新用户
router.post("/reguser", regUser);

// 登录
router.post("/login", login);

module.exports = router;
