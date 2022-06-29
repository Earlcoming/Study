const express = require("express");
const router = express.Router();
const path = require("path");
const expressJoi = require("@escook/express-joi");

// 注册用户
const { reguser, login } = require("./handler");
const { reg_login_schema } = require(path.join(process.cwd(), "global/schema"));
router.post("/reguser", expressJoi(reg_login_schema), reguser);

router.post("/login", expressJoi(reg_login_schema), login);

module.exports = router;
