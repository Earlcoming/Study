const express = require("express");
const router = express.Router();

const { regUser，login } = require("../router_handler/user");

// 注册新用户
router.post("/reguser", regUser);

// 登录
router.post("/login",regUser，login );

module.exports = router;
