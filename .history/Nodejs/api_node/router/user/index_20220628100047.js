const express = require("express");
const router = express.Router();
const path = require("path");
const expressJoi = require("@escook/express-joi");

// 注册用户
const { reguser } = require("./userHandler");
const { reg_login_schema } = require(path.join(path.cwd(), "global/schema"));
router.post("/reguser", expressJoi(reg_login_schema),reguser);

module.exports = router;
