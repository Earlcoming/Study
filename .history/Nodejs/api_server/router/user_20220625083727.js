const express = require("express");
const router = express.Router();

const { regUser } = require("../router_handler/user");

// 注册新用户
router.post("/reguser", regUser(req, res) => {
  res.send("reguser OK");
});

// 登录
router.post("/login", (req, res) => {
  res.send("login OK");
});

module.exports = router;
