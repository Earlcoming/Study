const express = require("express");
const router = express.Router();

// 注册用户
const { reguser } = require("./user");
router.post("/reguser", reguser);

module.exports = router;
