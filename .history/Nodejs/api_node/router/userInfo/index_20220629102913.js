const express = require("express");
const path = require('path')
const router = express.Router();

const { userInfo_schema } = require(path.join());

const { userInfo, updateUserInfo } = require("./handler");
router.get("/userInfo", userInfo);
router.post("/userInfo", updateUserInfo);

module.exports = router;
