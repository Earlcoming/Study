const express = require("express");
const router = express.Router();

// 注册用户
const { reguser } = require("./userHandler");
const {reg_login_schema} = require()
router.post("/reguser", reguser);

module.exports = router;
