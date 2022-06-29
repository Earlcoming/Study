const express = require("express");
const router = express.Router();
const path = require('path')

// 注册用户
const { reguser } = require("./userHandler");
const {reg_login_schema} = require(path.join(path.))
router.post("/reguser", reguser);

module.exports = router;
